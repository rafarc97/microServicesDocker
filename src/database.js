import MongoClient from 'mongodb';


export async function connect(){
    try{
        const client = await MongoClient.connect('mongodb://127.0.0.1:27017',{useUnifiedTopology: true});
        const db = client.db('APIRestNodeJS');
        console.log('DB is connected');
        return db;
    }
    catch(e){
        console.log(e);
    }
}
