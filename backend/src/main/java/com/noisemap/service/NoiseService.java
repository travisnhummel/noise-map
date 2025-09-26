package com.noisemap.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.noisemap.domain.NoiseRecord;
import com.noisemap.repository.NoiseRepository;

@Service
public class NoiseService {
    private final NoiseRepository noiseRepository;

    public NoiseService(NoiseRepository noiseRepository) {
        this.noiseRepository = noiseRepository;
    }

    public List<NoiseRecord> getAllNoise() {
        return noiseRepository.findAll();
    }

    public NoiseRecord addNoiseRecord(String suburb, double noiseLevel, double latitude, double longitude,
            String timestamp) {
        NoiseRecord record = new NoiseRecord();
        record.setSuburb(suburb);
        record.setLatitude(latitude);
        record.setLongitude(longitude);
        record.setNoiseLevel(noiseLevel);
        return noiseRepository.save(record);
    }
}
