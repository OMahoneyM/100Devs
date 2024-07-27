const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

const connectionString = 'mongodb+srv://mjvomahoney:ONgkmRszce7istot@test-cluster.lc3igds.mongodb.net/?retryWrites=true&w=majority&appName=test-cluster';

MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')

        app.set('view engine', 'ejs')

        app.use(bodyParser.urlencoded({ extended: true}))
        app.use(bodyParser.json())

        app.use(express.static('public'))

        app.get('/', (req, res) => {
            db.collection('quotes')
              .find()
              .toArray()
              .then(results => {
                res.render('index.ejs', { quotes: results })
            })
              .catch(error => console.error(error))

        })
        
        app.post('/quotes', (req, res) => {
            quotesCollection
                .insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                    console.log(result)
                })
                .catch(err => console.error(err))
        })

        app.put('/quotes', (req, res) => {
            quotesCollection
                .findOneAndUpdate(
                    { name: 'Yoda' }, 
                    {
                        $set: {
                            name: req.body.name,
                            quote: req.body.quote,
                        },
                    }, 
                    { upsert: true }
                )
                .then(results => {
                    res.json('Success')
                })
                .catch(error => console.error(error))
            console.log(req.body)
        })

        app.delete('/quotes', (req, res) => {
            quotesCollection
                .deleteOne({ name: req.body.name })
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.json('No quote to delete')
                    }
                    res.json("Deleted Darth Vader's quote")
                })
                .catch(error => console.error(error))
        })

    })
    .catch(err => console.error(err))

app.listen(3000, () => console.log('listening on 3000'))
