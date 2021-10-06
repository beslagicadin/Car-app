import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = "http://192.168.1.189:8090/car";
  private mainUrl = "http://192.168.1.189:8090/car/main";
  private addUrl = "http://192.168.1.189:8090/car/edit";
  private deleteUrl = "http://192.168.1.189:8090/car/delete";

  constructor(private http: HttpClient) { }

  getCarsList(): Observable<Car[]>{
    return this.http.get<Car[]>(`${this.mainUrl}`);
  }

  addCar(car: Car): Observable<Car>{
    return this.http.post<Car>(`${this.addUrl}`, car);
  }
  
  getCarById(id: number): Observable<Car>{
    return this.http.get<Car>(`${this.baseUrl}/${id}`);
  }

  editCar(id: number, car: Car): Observable<Car>{
    return this.http.post<Car>(`${this.addUrl}/${id}`, car);
  }

  deleteCar(id: number): Observable<Object>{
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }
}
