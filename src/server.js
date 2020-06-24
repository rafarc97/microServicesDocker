import express from 'express';
import IndexRoutes from './routes/index.routes.js';
import TaskRoutes from './routes/task.routes.js';


const app = express();


//Settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(IndexRoutes);
app.use('/tasks',TaskRoutes);


export default app;