import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/Common/http'
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(){
    return this.Http.get<Data>('https://me-frontend-challenge-api.herokuapp.com/orders/1')
    .toPromise();
    
  }

  constructor(private Http:HttpClient) {
  

   }
}
