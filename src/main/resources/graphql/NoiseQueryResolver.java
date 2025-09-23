package com.noisemap.graphql;

import com.noisemap.model.NoiseRecord;
import com.noisemap.repository.NoiseRepository;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class NoiseQueryResolver {

    private final NoiseRepository repository;

    public NoiseQueryResolver(NoiseRepository repository) {
        this.repository = repository;
    }

    // For "allNoise"
    public List<NoiseRecord> allNoise() {
        return repository.findAll();
    }

    // For "noiseBySuburb"
    public List<NoiseRecord> noiseBySuburb(String suburb) {
        return repository.findBySuburb(suburb);
    }
}
