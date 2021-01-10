import {Router} from 'express';
const router = Router();

import { getEmployees } from '../controllers/indexController';

router.get('/getEmployees', getEmployees);

export default router;