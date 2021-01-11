import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  employees: any = [];
  selected: number = 0;
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  // Response todos los empleados
  getEmployees() {
    this.empService.getEmpData()
      .subscribe(
        res => {
          this.employees = res;
        },
        err => console.error(err)
      );
  }

}
