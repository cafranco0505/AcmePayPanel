import { Component, HostBinding, OnInit } from '@angular/core';
import { EmployeeInterface } from 'src/app/models/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  employee: EmployeeInterface = {
    nombre: '',
    apellido1: '',
    apellido2: '',
    direccion: '',
    telefono: '',
    email: 'email@email.com',
    nivel: 0
  };

  constructor( private empService: EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmp(){ 
  this.empService.createEmployee(this.employee).subscribe(
    res => {
      console.log(res);
    },
    err => console.log(err)
  );
  }

}
