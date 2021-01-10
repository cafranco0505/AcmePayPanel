import express, { Application} from 'express';
import indexRoutes from './routes/indexRoutes';
const app: Application = express();

// objetos json
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// rutas
app.use(indexRoutes);

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
