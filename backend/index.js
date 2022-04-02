import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import HavenDAO from "./ao/havenAO.js"

dotenv.config() // Loads .env file
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

// Connect to the database
MongoClient.connect(process.env.MONGODB_URI, 
    { useNewUrlParser: true },


)
// Catch all errors
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})

// then start the server
.then(async client => {
    // get initial reference to the collection in the DB
    // await RestaurantsDAO.injectDB(client)
    await HavenDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})
