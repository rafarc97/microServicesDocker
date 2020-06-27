import MongoClient from 'mongodb';


export async function connect(){
    try{
        //Conectamos al servidor de la BD
        const client = await MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true});
        const db = client.db('APIRestNodeJS'); //APIRestNodeJS = nombre de la BD
        console.log('DB is connected');
        return db;
    }
    catch(err){
        console.log(err);
    }
}
