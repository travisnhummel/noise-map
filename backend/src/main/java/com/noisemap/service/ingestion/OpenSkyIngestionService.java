package com.noisemap.service.ingestion;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.noisemap.domain.FlightRecord;

@Service
public class OpenSkyIngestionService {
    private final RestTemplate restTemplate;
    private final String clientId = "travisnhummel@gmail.com-api-client";
    private final String clientSecret = "KDmwQUnVBcRkmkA6qMNtQfNmorbJ5jvR";

    // Token and expiry
    private String accessToken;
    private Instant tokenExpiry;

    public OpenSkyIngestionService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    private void refreshTokenIfNeeded() {
        if (accessToken == null || Instant.now().isAfter(tokenExpiry.minusSeconds(60))) {
            String tokenUrl = "https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

            MultiValueMap<String, String> form = new LinkedMultiValueMap<>();
            form.add("grant_type", "client_credentials");
            form.add("client_id", clientId);
            form.add("client_secret", clientSecret);

            HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(form, headers);

            ResponseEntity<Map<String, Object>> resp = restTemplate.exchange(tokenUrl, HttpMethod.POST, request,
                    new ParameterizedTypeReference<Map<String, Object>>() {
                    });
            Map<String, Object> body = resp.getBody();
            if (body == null || !body.containsKey("access_token") || !body.containsKey("expires_in")) {
                throw new RuntimeException("Failed to get access token from OpenSky");
            }
            this.accessToken = (String) body.get("access_token");
            int expiresIn = (Integer) body.get("expires_in");
            this.tokenExpiry = Instant.now().plusSeconds(expiresIn);
        }
    }

    @SuppressWarnings("unchecked")
    public List<FlightRecord> fetchSydneyFlights() {
        refreshTokenIfNeeded();
        String url = "https://opensky-network.org/api/states/all?lamin=-34.0&lomin=150.5&lamax=-33.7&lomax=151.3";

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);

        HttpEntity<?> entity = new HttpEntity<>(headers);
        ResponseEntity<Map<String, Object>> resp = restTemplate.exchange(url, HttpMethod.GET, entity,
                new ParameterizedTypeReference<Map<String, Object>>() {
                });

        Map<String, Object> body = resp.getBody();
        if (body == null || !body.containsKey("states")) {
            return new ArrayList<>();
        }
        List<List<Object>> states = (List<List<Object>>) body.get("states");

        List<FlightRecord> flightRecords = new ArrayList<>();
        for (List<Object> state : states) {
            FlightRecord record = new FlightRecord();
            record.setIcao24((String) state.get(0));
            String callsign = (String) state.get(1);
            record.setCallsign(callsign != null ? callsign.trim() : null);
            record.setOriginCountry((String) state.get(2));
            Double longitude = state.get(5) != null ? ((Number) state.get(5)).doubleValue() : null;
            record.setLongitude(longitude);
            Double latitude = state.get(6) != null ? ((Number) state.get(6)).doubleValue() : null;
            record.setLatitude(latitude);
            Double baroAltitude = state.get(7) != null ? ((Number) state.get(7)).doubleValue() : null;
            record.setBaroAltitude(baroAltitude);
            record.setOnGround((Boolean) state.get(8));
            Double velocity = state.get(9) != null ? ((Number) state.get(9)).doubleValue() : null;
            record.setVelocity(velocity);
            Double heading = state.get(10) != null ? ((Number) state.get(10)).doubleValue() : null;
            record.setHeading(heading);
            Double verticalRate = state.get(11) != null ? ((Number) state.get(11)).doubleValue() : null;
            record.setVerticalRate(verticalRate);
            if (state.size() > 17) {
                record.setCategory(state.get(17) != null ? ((Number) state.get(17)).intValue() : 0);
            }

            flightRecords.add(record);
        }
        return flightRecords;
    }

}
