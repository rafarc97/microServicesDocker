import Router from 'express';
import {connect} from '../database.js';
import ObjectID from 'mongodb';


const router = Router();


router.get('/', async (req,res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(result);
    res.send(result);
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    console.log({id});
    const db = await connect();
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
    console.log(id);
    res.json(result);
});

router.get('/:name', async (req,res) => {
    const {id} = req.params;
    console.log({id});
    const db = await connect();
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
    console.log(id);
    res.json(result);
});


router.post('/', async (req,res) => {
    const db = await connect();
    console.log(req.body.id);
    const task = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };
    const result = await db.collection('tasks').insertOne(task);
    res.json(result.ops[0]);
});


export default router;