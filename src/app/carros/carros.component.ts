import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Car } from '../models/car';
import { CarService } from '../services/car.service'



@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  car = {} as Car;
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  //-- Define se um carro será criado ou atualizado --// 
  saveCar(form: NgForm) {
    if(this.car.id !== undefined) {
      this.carService.updateCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    } 
  }

  //-- Chama o serviço para obter todos os carros --//
  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.getCars();
    });
  }

  //-- Deleta um carro --//
  deleteCar(car: Car) {
    this.carService.deleteCar(car).subscribe(() => {
      this.getCars()
    });
  }

  //-- Copia o carro para ser editado --//
  editCar(car: Car) {
    this.car = { ...car };
  }

  //-- Limpa o formulario --//
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    this.car = {} as Car;
  }

}
