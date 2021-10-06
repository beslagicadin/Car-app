package com.adin.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cars")
@NoArgsConstructor
@AllArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String manufacturer;
    private String model;
    private String fuelType;
    private String acriss;
    private int seats;

    public Car(String manufacturer, String model, String fuelType, String acriss, int seats) {
        super();
        this.manufacturer = manufacturer;
        this.model = model;
        this.fuelType = fuelType;
        this.acriss = acriss;
        this.seats = seats;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", name='" + manufacturer + '\'' +
                ", model='" + model + '\'' +
                ", fuelType='" + fuelType + '\'' +
                ", accris='" + acriss + '\'' +
                ", seats='" + seats + '\'' +
                '}';
    }
}