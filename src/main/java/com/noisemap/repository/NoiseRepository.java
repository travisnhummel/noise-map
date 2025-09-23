package com.noisemap.repository;

import com.noisemap.model.NoiseRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface NoiseRepository extends MongoRepository<NoiseRecord, String> {
    List<NoiseRecord> findBySuburb(String suburb);
}
