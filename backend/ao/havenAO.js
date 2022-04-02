import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let data

export default class HavenDAO{
    static async injectDB(conn){
        if (data) {
            return
        }
        try {
            data = await conn.db(process.env.MONGODB_NS).collection("titles")
        } catch (e){
            console.error(`unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async addTitle (title, imdbID, image) {
        // query db for title
        // if title exists, return
        // else, insert title into db
        try {
            const titleExists = await data.findOne({ imdbID })
            if (titleExists) {
                return
            }
            const newTitle = {
                title: title,
                imdbID: imdbID,
                image: image,
            }
            await data.insertOne(newTitle)
        } catch (e) {
            console.error(`Unable to add title: ${e}`)
        }
    }
    // Get a list of all the titles in the database
    static async getTitles({
        page = 0,
        titlesPerPage = 20,
    } = {}) {
        let cursor = data.find({})

        // if page is defined, skip to the correct page
        const displayCursor = cursor.limit(titlesPerPage).skip(page * titlesPerPage)

        try{
            const titles = await displayCursor.toArray()
            const totalTitles = await data.countDocuments()
            return {
                titles,
                totalTitles,
            }
        } catch (e){
            console.error(`Unable to get titles: ${e}`)
            return { titles: [], totalTitles: 0 }
        }
    }
}
