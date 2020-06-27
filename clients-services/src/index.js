import app from './server.js';
import {connect} from './database.js';

async function main() {   
    await app.listen(app.get('port'));
    await connect();
    console.log('Server on port ', app.get('port'));
}

main(); 