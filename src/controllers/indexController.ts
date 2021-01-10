import { Request, Response } from 'express';
import { pool } from '../db';
import { QueryResult } from 'pg';

export const getEmployees = async (req: Request, res: Response): Promise<Response> => {
    try {
        // peticion asincrona
        const response: QueryResult = await pool.query('SELECT * FROM asesores ORDER BY nombre ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getEmployeesById = async (req: Request, res: Response): Promise<Response> => { 
    try {
        // peticion asincrona
        const id = parseInt(req.params.id); // parametro url
        const response: QueryResult = await pool.query('SELECT * FROM asesores WHERE id_asesor = $1', [id]);
        return res.json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const createEmployee = async (req: Request, res: Response) => {
    try {
        // peticion asincrona
        const { nombre, apellido1, apellido2, direccion, telefono, email , nivel} = req.body;
        const response = await pool.query('INSERT INTO asesores (nombre, apellido1, apellido2,	direccion , telefono , email , nivel) VALUES ($1, $2, $3, $4, %5, $6, $7)'
        , [nombre, apellido1, apellido2, direccion , telefono , email , nivel]);
        res.json({
        message: 'Employee Created',
        body: {
            user: { nombre, apellido1, apellido2, direccion, telefono, email , nivel}
        }
        });
        return res.json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const updateEmployee = async (req: Request, res: Response) => {
    try {
        // peticion asincrona
        const id = parseInt(req.params.id);
        const { nombre, apellido1, apellido2, direccion, telefono, email , nivel} = req.body;

        const response = await pool.query('UPDATE asesores SET name = $1, apellido1 = $2, apellido2 = $3, direccion = $4, telefono = $5, email = $6, nivel = $7, WHERE id = $8',
        [nombre, apellido1, apellido2, direccion, telefono, email , nivel, id ]);
    res.json('Employee Updated');
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        // peticion asincrona
        const id = parseInt(req.params.id);
        await pool.query('DELETE FROM asesores where id_asesor = $1', [id]);
        res.json(`Employee ${id} deleted`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
    
};

