package com.noisemap.backend.graphql;

import com.noisemap.backend.model.NoiseRecord;
import com.noisemap.backend.repository.NoiseRepository;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class NoiseQueryResolver {

    private final NoiseRepository repository;

    public NoiseQueryResolver(NoiseRepository repository) {
        this.repository = repository;
    }

    @QueryMapping
    public List<NoiseRecord> allNoise() {
        System.out.println("\n\nAll Noise\n\n\n");
        List<NoiseRecord> records = repository.findAll();
        System.out.println(records.size());
        return records;
    }

    @QueryMapping
    public List<NoiseRecord> noiseBySuburb(String suburb) {
        return repository.findBySuburb(suburb);
    }
}
