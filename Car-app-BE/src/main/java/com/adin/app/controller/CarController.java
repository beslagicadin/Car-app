package com.adin.app.controller;

import com.adin.app.exception.ResourceNotFoundException;
import com.adin.app.model.Car;
import com.adin.app.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://192.168.1.189:8080/")
@RestController
@RequestMapping("car/")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping("main")
    public ResponseEntity<List<Car>> getCars(){
        return new ResponseEntity<>(this.carRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable int id){
        Car car = this.carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("\nCar with the ID: " + id +" doesn't exist!"));
        return new ResponseEntity<Car>(car, HttpStatus.OK);
    }

    @PostMapping("edit")
    public ResponseEntity<Car> addCar(@RequestBody Car car){
        System.out.println("\nNew car added: \n" + car);
        return new ResponseEntity<>(this.carRepository.save(car), HttpStatus.CREATED);
    }

    @PostMapping("edit/{id}")
    public ResponseEntity<Car> editCar(@PathVariable int id, @RequestBody Car editedCar ) {
        Car car = this.carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("\nCar with the ID: " + id +" doesn't exist!"));
        System.out.println("\nCar update: \n\tOld:" + car);
        car.setManufacturer(editedCar.getManufacturer());
        car.setModel(editedCar.getModel());
        car.setFuelType(editedCar.getFuelType());
        car.setAcriss(editedCar.getAcriss());
        car.setSeats(editedCar.getSeats());
        System.out.println("\tNew:" + car);
        return new ResponseEntity<>(this.carRepository.save(car), HttpStatus.OK);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity deleteCar(@PathVariable int id) {
        Car car = this.carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("\nCar with the ID: " + id +" doesn't exist!"));
            System.out.println("\nDeleting car: " + id + " - " + car.getManufacturer() + " " + car.getModel() + "...");
            this.carRepository.delete(car);
            System.out.println(id + " - " + car.getManufacturer() + " " + car.getModel() + " deleted\n");
            return new ResponseEntity<>(car, HttpStatus.OK);
    }
}

