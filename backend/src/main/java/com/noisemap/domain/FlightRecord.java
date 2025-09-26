package com.noisemap.domain;

import java.time.Instant;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document("flights")
@Data
public class FlightRecord {
    @Id
    private String id;
    private String icao24; // 0
    private String callsign; // 1
    private String originCountry; // 2
    private Double longitude; // 5
    private Double latitude; // 6
    private Double baroAltitude; // 7
    private Boolean onGround; // 8
    private Double velocity; // 9
    private Double heading; // 10
    private Double verticalRate; // 11
    private Double geoAltitude; // 13
    private int category; // 17
    private Instant timestamp;

    private GeoJsonPoint location;

    public String toString() {
        return String.format(
                "FlightRecord[icao24=%s, callsign=%s, originCountry=%s, longitude=%s, latitude=%s, baroAltitude=%s, onGround=%s, velocity=%s, heading=%s, verticalRate=%s]",
                icao24, callsign, originCountry, longitude, latitude, baroAltitude, onGround, velocity, heading,
                verticalRate);
    }
}
