import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id!: number;
  car!: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.car = new Car();
    this.carService.getCarById(this.id).subscribe( data => {
      this.car = data;
    });
  }

}
