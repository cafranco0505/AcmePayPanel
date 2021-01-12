import { Component, OnInit } from '@angular/core';
import { EmployeeInterface } from 'src/app/models/employee.interface';
import { SalesService } from 'src/app/services/sales.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  employees: any = [];
  option: EmployeeInterface;
  selected: Array<EmployeeInterface> = new Array<EmployeeInterface>();
  //cantidad vendidad
  
  id: any;
  sold: any;
  constructor(private empService:EmployeeService, private salesService: SalesService) { }

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

  getEmpSales() {
    this.salesService.getSalesData()
      .subscribe(
        res => {
          this.sold = res;
        },
        err => console.error(err)
      );
  }
// buscar empleado
  searchEmp(){
    this.empService.getEmployee(this.id)
      .subscribe(
        res => {
          this.option = res;
          console.log(this.option);
        },
        err => console.error(err)
      );
  }

  Selected(){
   
  }

}
