import {Router} from 'express';
const router = Router();

import { getEmployees, getEmployeesById, createEmployee ,updateEmployee, deleteEmployee} from '../controllers/indexController';

router.get('/api/employees', getEmployees);
router.get('/api/employees/:id', getEmployeesById);
router.post('/api/employees', createEmployee);
router.put('/api/employees/put', updateEmployee)
router.delete('/api/employees/delby/:id', deleteEmployee);

export default router;