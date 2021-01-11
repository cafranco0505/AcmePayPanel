import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any = [];
  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmpData()
      .subscribe(
        res => {
          this.employees = res;
        },
        err => console.error(err)
      );
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        res => {
          this.getEmployees();
        },
        err => console.error(err)
      );
    // console.log(id);
  }

}
