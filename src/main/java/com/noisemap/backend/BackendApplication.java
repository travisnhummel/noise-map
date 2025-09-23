package com.noisemap.backend;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.noisemap.backend.model.NoiseRecord;
import com.noisemap.backend.repository.NoiseRepository;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		System.out.println("Starting Backend Application...");
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner initData(NoiseRepository repository) {
		return args -> {
			if (repository.count() == 0) {
				System.out.print("repository is empty, adding sample data...\n");
				NoiseRecord record = new NoiseRecord();
				record.setSuburb("Botany");
				record.setLatitude(-33.9333);
				record.setLongitude(151.20000);
				record.setNoiseLevel(78.5);
				record.setTimestamp(LocalDateTime.now());
				repository.save(record);
				System.out.print("Sample data added.\n");
			}
		};
	}
}
