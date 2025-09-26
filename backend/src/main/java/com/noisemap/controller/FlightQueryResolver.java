package com.noisemap.controller;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.noisemap.domain.FlightRecord;
import com.noisemap.service.ingestion.OpenSkyIngestionService;

import java.util.List;

@Controller
public class FlightQueryResolver {

    private final OpenSkyIngestionService openSkyIngestionService;

    public FlightQueryResolver(OpenSkyIngestionService openSkyIngestionService) {
        this.openSkyIngestionService = openSkyIngestionService;
    }

    @QueryMapping
    public List<FlightRecord> getFlightRecords() {
        return openSkyIngestionService.fetchSydneyFlights();
    }
}
