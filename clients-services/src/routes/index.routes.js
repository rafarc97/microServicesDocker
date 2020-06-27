import Router from 'express'; //Módulo Router permite definir rutas


const router = Router();


router.get('/',(req,res) => {
    res.send('This is the GET clients main endpoint');
})

router.post('/',(req,res) => {
    console.log(req.body);
    res.send('This is the POST clients main endpoint');
});

router.delete('/', async (req,res) => {
    res.send('This is the DELETE clients main endpoint')
});

router.put('/', async (req,res) => {
    res.send('This is the PUT clients main endpoint')
});

export default router;