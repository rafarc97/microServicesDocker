import Router from 'express'; //Módulo Router permite definir rutas


const router = Router();


router.get('/',(req,res) => {
    try{
        res.send('This is the GET clients main endpoint');
    }catch(err){
        res.send(err);
    }
});

router.post('/',(req,res) => {
    try{
        console.log(req.body);
        res.send('This is the POST clients main endpoint');
    }catch(err){
        res.send(err);
    }
});

router.delete('/', async (req,res) => {
    try{
        res.send('This is the DELETE clients main endpoint');
    }catch(err){
        res.send(err);
    }
});

router.put('/', async (req,res) => {
    try{
        res.send('This is the PUT clients main endpoint');
    }catch(err){
        res.send(err);
    }
});

export default router;