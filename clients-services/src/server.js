import express from 'express';
import IndexRoutes from './routes/index.routes.js';
import ClientsRoutes from './routes/clients.routes.js';
import ClientsNameRoutes from './routes/clientsByname.routes.js';


const app = express();


//Settings
app.set('port',process.env.PORT || 3000);

//Middlewares (funciones que se ejecutan antes de que datos de rutas lleguen)
app.use(express.json()); //para poder recibir datos en formato json (así en req.body recibimos el json)

//Routes
app.use(IndexRoutes); 
app.use('/clients',ClientsRoutes); //rutas precedidas SIEMPRE de "/clients"
app.use('/clients/name',ClientsNameRoutes);

export default app;