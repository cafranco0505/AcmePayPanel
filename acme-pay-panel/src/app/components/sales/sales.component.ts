import { Component, OnInit , HostBinding } from '@angular/core';
import { SalesInterface } from 'src/app/models/sales.interface';
import { SalesService } from 'src/app/services/sales.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @HostBinding('class') classes = 'card';
  employees: any = [];
  sales: any = [];

  sale: SalesInterface = { valor: 0, asesor: 0 };

  constructor(private employeeService:EmployeeService,private salesService: SalesService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.getSales();
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

  getSales() {
    this.salesService.getSalesData()
      .subscribe(
        res => {
          this.sales = res;
        },
        err => console.error(err)
      );
  }

  saveSale(){ 
    this.salesService.regSale(this.sale).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    // console.log(this.sale);
  }


}
