import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInterface } from '../models/employee.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // apiEndPoint = 'http://localhost:3000/api/employees';
  apiEndPoint = 'http://134.122.3.83:3000/api/employees';

  constructor( private httpClient: HttpClient) { }

  getEmpData(){
    return this.httpClient.get(this.apiEndPoint);
  }

  getEmployee(id: string){
    return this.httpClient.get(`${this.apiEndPoint}/${id}`);
  }

  deleteEmployee(id: string){
    return this.httpClient.delete(`${this.apiEndPoint}/${id}`);
  }

  createEmployee(employee: EmployeeInterface) {
    return this.httpClient.post(this.apiEndPoint, employee);
  }
  
}
