import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentInterface } from '../models/payment.interface';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  apiEndPoint = 'http://localhost:3000/api/employees';
  //apiEndPoint = 'http://64.225.28.145:3000/api';

  constructor( private httpClient: HttpClient) { }

  getPayData(){
    return this.httpClient.get(this.apiEndPoint);
  }
}
