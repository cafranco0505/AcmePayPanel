import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentInterface } from '../models/payment.interface';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  // apiEndPoint = 'http://localhost:3000/api/pay';
  apiEndPoint = 'http://134.122.3.83:3000/api/pay';

  constructor( private httpClient: HttpClient) { }

  getPayData(){
    return this.httpClient.get(this.apiEndPoint);
  }
}
