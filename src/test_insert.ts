import { MongoClient } from "mongodb";

const mongo_url = 'mongodb://admin:admin@localhost:27017';

MongoClient.connect(mongo_url, (err, client) => {
    let usernames: any[] = ["halo"];
    if (err) {
        console.log(err);
        return;
    }

    let db = client.db('usernames');
    db.collection('names').insertOne({user: 'simon'}).then((val: any) => {
        console.log(val);
    });

})
