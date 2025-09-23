package com.noisemap.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.noisemap.backend.model.NoiseRecord;

import java.util.List;

public interface NoiseRepository extends MongoRepository<NoiseRecord, String> {
    List<NoiseRecord> findBySuburb(String suburb);
}
