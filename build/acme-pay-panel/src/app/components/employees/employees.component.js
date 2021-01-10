"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesComponent = void 0;
const core_1 = require("@angular/core");
let EmployeesComponent = class EmployeesComponent {
    constructor(employeeService) {
        this.employeeService = employeeService;
        this.employees = [];
    }
    ngOnInit() {
        this.getEmployees();
    }
    getEmployees() {
        this.employeeService.getEmployeesData()
            .subscribe(res => {
            console.log(res);
        }, err => console.error(err));
    }
};
EmployeesComponent = __decorate([
    core_1.Component({
        selector: 'app-employees',
        templateUrl: './employees.component.html',
        styleUrls: ['./employees.component.css']
    })
], EmployeesComponent);
exports.EmployeesComponent = EmployeesComponent;
