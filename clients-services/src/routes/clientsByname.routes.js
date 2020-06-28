import Router from 'express'; //Módulo Router permite definir rutas
import {connect} from '../database.js';
import ObjectID from 'mongodb';


const router = Router();


router.get('/:name', async (req,res) => {
    try{
        const {name} = req.params;
        console.log({name});
        const db = await connect();
        /*MongoDB consulta objetos en su colección => usamos módulo ObjectID para transformar
        el string id a un objeto */
        const result = await db.collection('clients').findOne({name: ObjectID(name)}); //ERROR
        res.json(result);
    }catch(err){
        res.send(err);
    }
});

export default router;