import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SalesComponent } from './components/sales/sales.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmployeesComponent,
    SalesComponent,
    PaymentsComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
