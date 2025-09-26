package com.noisemap.controller;

import com.noisemap.domain.NoiseRecord;
import com.noisemap.repository.NoiseRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class NoiseQueryResolver {

    private static final Logger logger = LoggerFactory.getLogger(NoiseQueryResolver.class);
    private final NoiseRepository repository;

    public NoiseQueryResolver(NoiseRepository repository) {
        this.repository = repository;
    }

    @QueryMapping
    public List<NoiseRecord> allNoise() {
        List<NoiseRecord> records = repository.findAll();
        logger.info("Getting all noise records: " + records.size());
        return records;
    }

    @QueryMapping
    public List<NoiseRecord> noiseBySuburb(String suburb) {
        return repository.findBySuburb(suburb);
    }
}
