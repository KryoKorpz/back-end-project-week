const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const test = require('assert');
const port = process.env.PORT || 5000
const url = 'mongodb://localhost:27017';

const dbName = 'test1';

const server = express();
server.use(express.json());

MongoClient.connect(url, { useNewUrlParser: true },(err, client) => {
    const adminDb = client.db(dbName).admin()

    adminDb.listDatabases((err,dbs) => {
        test.equal(null, err);
        test.ok(dbs.databases.length > 0);
        client.close();
    });
    return console.log('Connected to Mongodb Client')
});

server.get('/', (req, res) =>{
    res.status(200).json('HI World, Im here')
})

server.listen(port, () => {
    console.log('You did it')
})