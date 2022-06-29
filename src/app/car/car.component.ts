import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICar } from '../shared/model/cars';
import { ShopParams } from '../shared/model/shopParams';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @ViewChild('query', {static: true}) searchTerm : ElementRef;
  cars: ICar[];
  totalItem : number;
  shopParams = new ShopParams();
  sortOptions = [
    {name: 'Sort By Id', value: 'id'},
    {name: 'Sort By Name', value: 'name'},
    {name: 'Sort By Price', value: 'price'}
  ];

  orderOptions = [
    {name: 'Low to High', value: 'ASC'},
    {name: 'High to Low', value: 'DESC'}
  ];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars(this.shopParams).subscribe(response => {
      this.cars = response.content;
      this.totalItem = response.totalElements;
    }, error => {
      console.log(error);
    });
  }

  onSearchSelected() {
    this.shopParams.query = this.searchTerm.nativeElement.value;
    this.getCars();
  }

  onResetSelected() {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getCars();
  }

  onSortSelected(sortBy: string) {
    this.shopParams.sortBy = sortBy;
    this.getCars();
  }
  onOrderSelected(orderBy : string) {
    this.shopParams.sortDirection = orderBy;
    this.getCars();
  }

}
