import Router, { response } from 'express'; //Módulo Router permite definir rutas
import axios from 'axios';

const router = Router();


router.get('/:id', async (req,res) => {
    id = req.params;
    var policiesList = [];
    axios.get('http://localhost:4000/politics/').then((response) => {
        for (i in response.data) {
            if(response.data[i].clientId == id){
                policiesList.append(response.data[i].clientId);
                res.json(policiesList);
            }
            else{
                res.json('Any policy found.');
            }
        }
    })
}); 

router.get('/policyid/:id', async (req,res) => {
    policyId = req.params;
    var userLinked = null;
    axios.get('http://localhost:4000/clients/').then((response) => {
        for (i in response.data) {
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