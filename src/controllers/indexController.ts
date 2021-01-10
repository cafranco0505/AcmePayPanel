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

