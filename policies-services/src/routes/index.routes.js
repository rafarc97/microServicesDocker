import Router from 'express'; //Módulo Router permite definir rutas


const router = Router();


router.get('/',(req,res) => {
    res.send('This is the GET policies main endpoint');
})

router.post('/',(req,res) => {
    console.log(req.body);
    res.send('This is the POST policies main endpoint');
});

router.delete('/', async (req,res) => {
    res.send('This is the DELETE policies main endpoint')
});

router.put('/', async (req,res) => {
    res.send('This is the PUT policies main endpoint')
});

export default router;