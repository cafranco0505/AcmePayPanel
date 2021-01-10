import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SalesComponent } from './components/sales/sales.component';
import { PaymentsComponent } from './components/payments/payments.component';

const routes: Routes = [
  {path: 'Inicio', component: MainPanelComponent},
  {path: 'Empleados', component: EmployeesComponent},
  {path: 'Ventas', component: SalesComponent},
  {path: 'Pagos', component: PaymentsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
