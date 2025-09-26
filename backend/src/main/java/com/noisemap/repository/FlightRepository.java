package com.noisemap.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.noisemap.domain.FlightRecord;

public interface FlightRepository extends MongoRepository<FlightRecord, String> {
}