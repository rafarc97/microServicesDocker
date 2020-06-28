import Router from 'express'; //Módulo Router permite definir rutas
import {connect} from '../database.js';
import ObjectID from 'mongodb';


const router = Router();


router.get('/', async (req,res) => {
    try{
        const db = await connect();
        //si la coleccion clients no existe se crea
        const result = await db.collection('clients').find({}).toArray(); 
        res.json(result);
    }catch(err){
        res.send(err); //falta implemetación de los tipos de errores
    }
});


router.get('/:id', async (req,res) => {
    try{
    const {id} = req.params;
    console.log({id});
    const db = await connect();
    /*MongoDB consulta objetos en su colección => usamos módulo ObjectID para transformar
    el string id a un objeto */
        const result = await db.collection('clients').findOne({id: ObjectID(id)}); //ERROR
        res.json(result);
    }
    catch(err){
        res.send(err); //falta implemetación de los tipos de errores
    }
}); 


router.post('/', async (req,res) => {
    try{
        const db = await connect();
        const client = { //definimos el dato recibido para guardarlo
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };
        //insertamos el objeto client en la colección clients
        const result = await db.collection('clients').insertOne(client);
        res.send('OK');
    }catch(err){
        res.send(err);
    }
});


router.delete('/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const db = await connect();
        await db.collection('clients').deleteOne({id: ObjectID(id)}); //ERROR
        res.json({
            message: `Client ${id} deleted.`,
            result
        });
    }catch(err){
        res.send(err);
    }
});


//Actualiza el nombre de un cliente identificándolo por su ID
router.put('/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const updateClient = {
            name: req.body.name
        };
        const db = await connect();
        const result = await db.collection('clients').updateOne({id: ObjectID(id)}, {$set: updateClient}); //ERROR
        res.json({
            message: `Client ${id} updated.`
        });
    }catch(err){
        res.send(err);
    }
});


export default router;