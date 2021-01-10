import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInterface } from '../models/employee.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiEndPoint = 'http://161.35.131.209:3000/api';

  constructor( private httpClient: HttpClient) { }

  getEmpData(){
    return this.httpClient.get(`${this.apiEndPoint}/employees`);
  }

  // getEmployee(id: string){
  //   return this.httpClient.get(`${this.apiEndPoint}/employees/${id}`);
  // }

  // deleteEmployee(id: string){
  //   return this.httpClient.delete(`${this.apiEndPoint}/employees/${id}`);
  // }

  // createEmployee(employee: EmployeeInterface) {
  //   return this.httpClient.post(`${this.apiEndPoint}/employees`, employee);
  // }
}
