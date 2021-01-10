"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const main_panel_component_1 = require("./components/main-panel/main-panel.component");
const employees_component_1 = require("./components/employees/employees.component");
const sales_component_1 = require("./components/sales/sales.component");
const payments_component_1 = require("./components/payments/payments.component");
const routes = [
    { path: 'Inicio', component: main_panel_component_1.MainPanelComponent },
    { path: 'Empleados', component: employees_component_1.EmployeesComponent },
    { path: 'Ventas', component: sales_component_1.SalesComponent },
    { path: 'Pagos', component: payments_component_1.PaymentsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
