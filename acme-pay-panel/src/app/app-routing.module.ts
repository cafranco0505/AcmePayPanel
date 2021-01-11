import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SalesComponent } from './components/sales/sales.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [
  {path: 'inicio', component: MainPanelComponent},
  {path: 'empleados', component: EmployeesComponent},
  {path: 'ventas', component: SalesComponent},
  {path: 'pagos', component: PaymentsComponent},
  {path: 'nuevo-registro', component: AddEmployeeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
