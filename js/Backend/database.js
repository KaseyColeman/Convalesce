const { Console } = require('console');
const {MongoClient} = require('mongodb');

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 
async function main() {
	// we'll add code here soon
    const uri = "mongodb+srv://KaseyColeman:KaseyColeman@Convalesce.wql1e.mongodb.net/UserInfo?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
        console.log("It is hitting this method");
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);



