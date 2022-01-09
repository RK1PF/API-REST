const mongoose = require('mongoose');

const DB = "wikiDB"
const URI = `mongodb://localhost:27017/${DB}`

const MongoDBClient = {
    init: () => {
        try {
            const client = mongoose.connect(URI, {
                useNewUrlParser: true, useUnifiedTopology: true
            })
            client.then(()=> console.log(`connected to DB: ${DB}`))
        } catch(e) {
            throw Error(e)
        }
    }
}

module.exports = MongoDBClient;