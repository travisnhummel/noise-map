package com.noisemap.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.noisemap.domain.NoiseRecord;

import java.util.List;

public interface NoiseRepository extends MongoRepository<NoiseRecord, String> {
    List<NoiseRecord> findBySuburb(String suburb);
}
