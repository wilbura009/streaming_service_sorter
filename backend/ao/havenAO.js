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

    static async addTitle (title, imdbID) {
        // Create an objectID and insert it into the database
        const titleDoc = {
            title: title,
            imdbID: imdbID,
        }
        try{
            return await data.insertOne(titleDoc)
        } catch (e) {
            console.error(`Unable to post title: ${e}`)
            return { error: e}
        }
    }
    // Get a list of all the titles in the database
    static async getTitles({
        page = 0,
        titlesPerPage = 20,
    } = {}) {
        let cursor = data.find({})

        // try{
        //     cursor = await titles
        // }
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


// export default class HavenApiObject {
//     static async apiGetTitles() {
//         const params = new URLSearchParams({
//             country: 'us',
//             service: 'netflix',
//             type: 'series',
//             keyword: 'Ozark'
//         })

//         const url = `https://streaming-availability.p.rapidapi.com/search/basic?${params.toString()}`
//         fetch(url, {
//             headers: {
//                 'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
//                 'X-RapidAPI-Key': '8f72a3e46bmsh81804a6eb2f8786p1c59e2jsne3c3ab52c4fd'
//             }
//         })
//             .then(res => res.json())
//             .then(data => console.log(data))
//     }

// }
