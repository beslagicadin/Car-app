import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = this.fb.group({
    manufacturer: ['', Validators.required],
    model: ['', Validators.required],
    fuelType: ['', Validators.required],
    category: ['', Validators.required],
    type: ['', Validators.required],
    transmissionAndDrive: ['', Validators.required],
    fuelAndAC: ['', Validators.required],
    imgUrl: [''],
    seats: ['', Validators.required]
    });

   category: string[] = ["C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "S", "R", "P", "U", "W", "O", "X"];
   type: string[] = ["B", "C", "D", "E", "W", "V", "L", "S", "T", "F", "J", "X", "P", "Q", "Z", "M", "R", "H", "Y", "N", "G", "K"];
   transmisionAndDrive: string[] = ["A", "B", "C", "D", "M", "N"];
   fuelAndAC: string[] = ["A", "B", "C", "D", "E", "R", "N", "Q", "H", "I", "L", "S", "M", "F", "V", "Z", "U", "X"];
   fuelTp: string[] = ["Unspecified","Diesel", "Hybrid", "Electric", "ElectricPlus", "LPG", "Hydrogen", "MultiFuel", "Petrol", "Ethanol"];

  car: Car = new Car();
  cat!: string;
  tp!: string;
  tnd!: string;
  faac!: string;
  toMain: string = "../main";

  constructor(private carService: CarService, 
    private route: ActivatedRoute,
    private router: Router, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id'] != null){
        this.carService.getCarById(this.route.snapshot.params['id']).subscribe(data =>{
          this.cat = data.acriss.substr(0, 1);
          this.tp = data.acriss.substr(1, 1);
          this.tnd = data.acriss.substr(2, 1);
          this.faac = data.acriss.substr(3, 1);
          this.car = data;
          this.toMain = "../../main";
        },
        error => console.log(error)
        );
      }
    }

  saveCar(){
    this.car.acriss=this.cat+this.tp+this.tnd+this.faac;
    this.carService.addCar(this.car).subscribe(data =>{
      console.log(data);
      this.goToCarsList();
    },
    error => console.log(error));
  }

  editCar(){
    this.car.acriss=this.cat+this.tp+this.tnd+this.faac;
    this.carService.editCar(this.car.id, this.car).subscribe(data =>{
      console.log(data);
      this.goToCarsList();
    },
    error => console.log(error));
  }

  goToCarsList(){
    this.router.navigate(['/main'])
  }

  onSubmit(){
    if(this.route.snapshot.params['id'] != null){
      this.editCar();
    }
    else{
      this.saveCar();
    }
    
    console.log(this.car);
  }

}
