import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/model/IPagination';
import { ShopParams } from '../shared/model/shopParams';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost:8080/api/discover/';

  constructor(private http: HttpClient) { }

  getCars(shopParams: ShopParams) {

    let params = new HttpParams();

    if(shopParams.query) {
      params = params.append('query', shopParams.query);
    }
    if(shopParams.sortBy) {
      params = params.append('sortBy', shopParams.sortBy);
    }
    if(shopParams.sortDirection) {
      params = params.append('sortDirection', shopParams.sortDirection);
    }

    return this.http.get<IPagination>(this.baseUrl+ 'products', {observe: 'response', params}).
    pipe(map(response => {
      return response.body;
    }));
  }
}
