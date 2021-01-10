import express, { Application} from 'express';
import indexRoutes from './routes/indexRoutes';
const app: Application = express();

// objetos json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// rutas
app.use(indexRoutes);

app.listen(3000);
console.log('Server on port', 3000);