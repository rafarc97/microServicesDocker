import express from 'express';
import IndexRoutes from './routes/index.routes.js';
import ClientsRoutes from './routes/politics.routes.js';



const app = express();


//Settings
app.set('port',4000);

//Middlewares (funciones que se ejecutan antes de que datos de rutas lleguen)
app.use(express.json()); //para poder recibir datos en formato json (así en req.body recibimos el json)

//Routes
app.use(IndexRoutes); 
app.use('/politics',ClientsRoutes); //rutas precedidas SIEMPRE de "/politics"

export default app;