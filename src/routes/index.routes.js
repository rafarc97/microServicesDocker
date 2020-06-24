import Router from 'express';


const router = Router();


router.get('/',(req,res) => {
    res.send('Getting data');
})

router.post('/',(req,res) => {
    res.send('Postting data on my application');
});

router.get('/:id', async (req,res) => {
    res.send('Getting data by Id user')
});

router.get('/:name', async (req,res) => {
    res.send('Getting data by Name user')
});

export default router;