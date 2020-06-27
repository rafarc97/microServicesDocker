import Router from 'express'; //Módulo Router permite definir rutas


const router = Router();


router.get('/',(req,res) => {
    res.send('This is the GET clientspolitics main endpoint');
})


export default router;