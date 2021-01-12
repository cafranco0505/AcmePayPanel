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
  cargado = false;
  employees: any = [];
  option: any = [];
  sold: any = [];
  selected: Array<EmployeeInterface> = new Array<EmployeeInterface>(); 
  soldArray: Array<any> = new Array<any>();  
  id: any;
  // Operaciones en pago
  salud: number;
  riesgos: number;
  pension: number;
  comision: number;
  ventas: number;
  meta: number;
  meta2: number;
  meta3: number;
  total: number;
  salario: number;
  deducible: number;

  constructor(private empService:EmployeeService, private salesService: SalesService) { 
    
  }

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
    return new Promise((resolve, reject) => {
    this.salesService.getEmpSales(this.id)
      .subscribe(
        res => {
          this.sold = res;
          resolve();
          if(this.soldArray.length == 0){
            this.saleResolver();
          }
        },
        err => console.error(err)
      );
    });
  }
// buscar empleado
  searchEmp(){
    return new Promise((resolve, reject) => {
      this.empService.getEmployee(this.id)
      .subscribe(
        (res) => {
          this.option = res;
          // console.log(this.option);
          resolve();
          if(this.cargado == false){
            this.empResolver();
          }
          
          // this.selected.push(this.option);
        },
        err => console.error(err)
      );
    });
  }

  empResolver(){
    this.searchEmp().then( () => {
      this.pushSelected();
    });
  }

  saleResolver(){
    this.getEmpSales().then( () => {
      this.pushSold();
    });
  }
  

  pushSelected(){
    this.cargado = true;
    this.selected = this.option;
    this.getEmpSales();
    console.log(this.selected);
  }

  pushSold(){
    this.soldArray = this.sold;
    this.payConfig();
  }


  payConfig(){
    // deducible
    this.salario = this.selected[0].salario;
    this.salud = (this.salario * 0.04);
    this.pension = (this.salario * 0.04);
    this.riesgos = (this.salario * 0.0075);
    this.ventas = this.soldArray[0].sum;
    // metas
    this.meta = this.selected[0].meta;
    this.meta2 = (this.selected[0].meta * 1.2);
    this.meta2 = (this.selected[0].meta * 1.4);
    if(this.ventas > this.meta && this.ventas < this.meta2){
      this.comision = (this.ventas * 1.06);
    }else if(this.ventas > this.meta2 && this.ventas < this.meta3){
      this.comision = (this.ventas * 1.1);
    }else if(this.ventas > this.meta3){
      this.comision = (this.ventas * 1.12);
    }else{
      this.comision = 0;
    }
    console.log(this.salud);
    this.deducible = (this.pension + this.salud + this.riesgos);
    this.total = (this.salario + this.comision) - this.deducible;
  }

}
