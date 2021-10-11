const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://KaseyColeman:KaseyColeman@convalesce.wql1e.mongodb.net/UserInfo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("UserInfo").collection("Journals");
    // perform actions on the collection object
    client.close();
});

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

listDatabases(client);