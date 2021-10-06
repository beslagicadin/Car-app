package com.adin.app;

import com.adin.app.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CarApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CarApplication.class, args);
	}

	@Autowired
	private CarRepository carRepository;

	@Override
	public void run(String... args) {
		for(int i = 0; i<10; i++) {
			//this.carRepository.save(new Car("Manufacturer" + i, "Model" + i, "UNSPECIFIED", "CBAA", 4));
		}
	}
}
