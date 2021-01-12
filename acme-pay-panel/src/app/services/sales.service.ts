import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesInterface } from '../models/sales.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  // apiEndPoint = 'http://localhost:3000/api/sales';
  apiEndPoint = 'http://174.138.56.34:3000/api/sales';

  constructor( private httpClient: HttpClient) { }

  getSalesData(){
    return this.httpClient.get(this.apiEndPoint);
  }
  //add new sale
  regSale(sale: SalesInterface){
    return this.httpClient.post(this.apiEndPoint, sale);
  }

  getEmpSales(id: string){
    return this.httpClient.get(`${this.apiEndPoint}/${id}`);
  }
}
