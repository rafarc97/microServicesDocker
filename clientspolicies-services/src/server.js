import express from 'express';
import IndexRoutes from './routes/index.routes.js'; //importamos el objeto router
import ClientsPoliticsRoutes from './routes/clientspolicies.routes.js';

const app = express();


//Settings
app.set('port',5000);

//Middlewares (funciones que se ejecutan antes de que datos de rutas lleguen)
app.use(express.json()); //para poder recibir datos en formato json (así en req.body recibimos el json)

//Routes
app.use(IndexRoutes); 
app.use('/clientspolitics',ClientsPoliticsRoutes); //rutas precedidas SIEMPRE de "/clientspolitics"

export default app;