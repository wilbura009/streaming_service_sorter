import express, { response } from "express"
import HavenDAO from "../ao/havenAO.js"
import axios from "axios"
import HavenController from "./haven.controller.js"

const router = express.Router()

var a = 92

router.route("/").get((req, res) => {
    let config = {
        headers: {
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            'X-RapidAPI-Key': '8f72a3e46bmsh81804a6eb2f8786p1c59e2jsne3c3ab52c4fd'
        },
        params: {
            country: 'us',
            service: 'hbo',
            type: 'series',
            page: '1',
            output_language: 'en',
            language: 'en'
        },
    }

    axios.get('https://streaming-availability.p.rapidapi.com/search/basic', config)
        .then(response => {            
            const data = response.data
            const res_array = []

            res_array.push({
                data
            })
            console.log(res_array)
        
            // loop through results array and add each title to the database
            for (let i = 0; i < 8; i++) {
                const title = data.results[i].title
                const imdbID = data.results[i].imdbID
                const image = data.results[i].posterURLs.original
                const imageBar = data.results[i].posterURLs["92"]
                const description = data.results[i].overview
                const video = data.results[i].video
                const streamingInfo = data.results[i].streamingInfo
                const streamName = Object.keys(data.results[i].streamingInfo)[0]
                const link = streamingInfo[Object.keys(data.results[i].streamingInfo)[0]].us.link
                // console.log(streamingInfo)
                // console.log(streamName)
                // console.log(link)
                // console.log(imdbID)
                // console.log(image)
                HavenDAO.addTitle(title, imdbID, image, imageBar, description, streamName, link, video)
            }
            res.json(res_array)
        })
        
        //     const TitleResponse = HavenDAO.addTitle(
        //         data.results[0].title,
        //         data.results[0].imdbID,
        //         data.results[0].posterURLs.original
        //     )
        //     .catch(err => {console.error(err.stack)})
        // })
})
router
    .route("/titles")
    .get(HavenController.apiGet)

router
    .route("/titles/:imdbID")
    .get(HavenController.apiGetOne)

export default router