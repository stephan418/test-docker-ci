import express from "express";
import { MongoClient } from "mongodb";
import path from 'path';

const app = express();
const mongo_url = 'mongodb://admin:admin@mongodb:27017';

app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    MongoClient.connect(mongo_url, (err, client) => {
        if (err) {
            console.log(err);
            return;
        }

        let db = client.db('usernames');
        db.collection('names').find({}).toArray().then((val: any) => {
            let usernames = val;
            res.render('index.ejs', {usernames: usernames.map((username: { user: any; }) => username.user)});
        });

    })
});

app.listen(3000);
console.log('open')
