package com.noisemap.graphql;

import com.noisemap.model.NoiseRecord;
import com.noisemap.repository.NoiseRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Controller
public class NoiseMutationResolver {

    private static final Logger logger = LoggerFactory.getLogger(NoiseQueryResolver.class);

    private final NoiseRepository noiseRepository;

    public NoiseMutationResolver(NoiseRepository noiseRepository) {
        this.noiseRepository = noiseRepository;
    }

    @MutationMapping
    public NoiseRecord addNoiseRecord(
            @Argument String suburb,
            @Argument double decibel,
            @Argument double latitude,
            @Argument double longitude,
            @Argument String timestamp) {
        logger.info("Adding noise record: " + suburb + ", " + decibel + "dB at " + timestamp);
        NoiseRecord record = new NoiseRecord();
        record.setSuburb(suburb);
        record.setNoiseLevel(decibel);
        record.setLatitude(latitude);
        record.setLongitude(longitude);
        record.setTimestamp(LocalDateTime.ofInstant(Instant.parse(timestamp), ZoneId.systemDefault()));
        return noiseRepository.save(record);
    }
}