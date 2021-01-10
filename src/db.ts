import { Pool } from 'pg';

export const pool = new Pool({
    user: 'acmin',
    host: 'employees.cdlzpbazeqha.us-east-2.rds.amazonaws.com',
    password: 'Acme1305',
    database: 'empleados_acme',
    port: 5432
});