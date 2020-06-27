import Router from 'express'; //Módulo Router permite definir rutas
import {connect} from '../database.js';
import ObjectID from 'mongodb';


const router = Router();


router.get('/', async (req,res) => {
    const db = await connect();
    //si la coleccion politics no existe se crea
    const result = await db.collection('politics').find({}).toArray(); 
    res.json(result);
});


router.post('/', async (req,res) => {
    const db = await connect();
    const politie = { //definimos el dato recibido para guardarlo
        id: req.body.id,
        amountInsured: req.body.amountInsured,
        email: req.body.email,
        inceptionDate: req.body.inceptionDate,
        installmentPayment: req.body.installmentPayment,
        clientId: req.body.clientId
    };
    //insertamos el objeto politie en la colección politics
    const result = await db.collection('politics').insertOne(politie);
    res.json(result.ops);
});


router.get('/:id', async (req,res) => {
    const {id} = req.params;
    console.log({id});
    const db = await connect();
    /*MongoDB consulta objetos en su colección => usamos módulo ObjectID para transformar
    el string id a un objeto */
    const result = await db.collection('politics').findOne({id: ObjectID(id)}); //ERROR
    res.json(result);
}); 


router.delete('/:id', async (req,res) => {
    const {id} = req.params;
    const db = await connect();
    await db.collection('politics').deleteOne({id: ObjectID(id)}); //ERROR
    res.json({
        message: `Politie ${id} deleted.`,
        result
    })
});


export default router;