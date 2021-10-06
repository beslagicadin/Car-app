import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'cars',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.getCars();
  }
  private getCars(){
    this.carService.getCarsList().subscribe(data => {
      this.cars = data;
    });
  }

  editCar(id: number){
    this.router.navigate(['edit', id])
  }

  deleteCar(id: number){
    if(confirm("Are you sure to delete car: "+ id)) {
      this.carService.deleteCar(id).subscribe(data => {
        console.log(data);
        this.getCars();
      });
    }
  }

  viewCar(id: number){
    this.router.navigate(['details', id]);
  }
  
}
