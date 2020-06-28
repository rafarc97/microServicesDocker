import Router from 'express'; //Módulo Router permite definir rutas
import response from 'express';
import axios from 'axios';

const router = Router();


router.get('/:id', async (req,res) => {
    var {id} = req.params;
    console.log(id);
    var policiesList = [];
    axios.get('http://localhost:4000/politics/').then((response) => {
        for (let i in response.data) {
            if(response.data[i].clientId == id){
                policiesList.push(response.data[i]);
                res.json(policiesList);
            }
            else{
                res.json('Any policy found.');
            }
        }
    })
}); 

router.get('/policyid/:id', async (req,res) => {
    var {policyId} = req.params;
    var userLinked = null;
    axios.get('http://localhost:3000/clients/').then((response) => {
        for (let i in response.data) {
            if(response.data[i].id == policyId){
                userLinked = response.data[i].id;
                res.json(userLinked);
            }
            else{
                res.json('User not found.');
            }
        }
    })
}); 


export default router;