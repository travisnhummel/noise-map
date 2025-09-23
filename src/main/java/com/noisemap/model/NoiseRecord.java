package com.noisemap.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

import java.time.LocalDateTime;

@Document(collection = "noiseData")
@Data
public class NoiseRecord {
    @Id
    private String id;
    private String suburb;
    private double latitude;
    private double longitude;
    private double noiseLevel;
    private LocalDateTime timestamp;
}
