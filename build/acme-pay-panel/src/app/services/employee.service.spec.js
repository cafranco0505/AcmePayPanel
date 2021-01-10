"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const employee_service_1 = require("./employee.service");
describe('EmployeeService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(employee_service_1.EmployeeService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
