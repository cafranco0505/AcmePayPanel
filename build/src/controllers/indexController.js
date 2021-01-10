"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployeesById = exports.getEmployees = void 0;
const db_1 = require("../db");
const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // peticion asincrona
        const response = yield db_1.pool.query('SELECT * FROM asesores ORDER BY nombre ASC');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getEmployees = getEmployees;
const getEmployeesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // peticion asincrona
        const id = parseInt(req.params.id); // parametro url
        const response = yield db_1.pool.query('SELECT * FROM asesores WHERE id_asesor = $1', [id]);
        return res.json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getEmployeesById = getEmployeesById;
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // peticion asincrona
        const { nombre, apellido1, apellido2, direccion, telefono, email, nivel } = req.body;
        const response = yield db_1.pool.query('INSERT INTO asesores (nombre, apellido1, apellido2,	direccion , telefono , email , nivel) VALUES ($1, $2, $3, $4, %5, $6, $7)', [nombre, apellido1, apellido2, direccion, telefono, email, nivel]);
        res.json({
            message: 'Employee Created',
            body: {
                user: { nombre, apellido1, apellido2, direccion, telefono, email, nivel }
            }
        });
        return res.json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.createEmployee = createEmployee;
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // peticion asincrona
        const id = parseInt(req.params.id);
        const { nombre, apellido1, apellido2, direccion, telefono, email, nivel } = req.body;
        const response = yield db_1.pool.query('UPDATE asesores SET name = $1, apellido1 = $2, apellido2 = $3, direccion = $4, telefono = $5, email = $6, nivel = $7, WHERE id = $8', [nombre, apellido1, apellido2, direccion, telefono, email, nivel, id]);
        res.json('Employee Updated');
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // peticion asincrona
        const id = parseInt(req.params.id);
        yield db_1.pool.query('DELETE FROM asesores where id_asesor = $1', [id]);
        res.json(`Employee ${id} deleted`);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.deleteEmployee = deleteEmployee;
