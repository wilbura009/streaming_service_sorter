import express, { response } from "express"
import HavenDAO from "../ao/havenAO.js"
import axios from "axios"
import HavenController from "./haven.controller.js"

const router = express.Router()

var a = 154

router.route("/").get((req, res) => {
    let config = {
        headers: {
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            'X-RapidAPI-Key': '8f72a3e46bmsh81804a6eb2f8786p1c59e2jsne3c3ab52c4fd'
        },
        params: {
            country: 'us',
            service: 'netflix',
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
            for (let i = 0; i < 5; i++) {
                const title = data.results[i].title
                const imdbID = data.results[i].imdbID
                const image = data.results[i].posterURLs.original
                console.log(title)
                console.log(imdbID)
                console.log(image)
                HavenDAO.addTitle(title, imdbID, image)
            }
        })
        
        //     const TitleResponse = HavenDAO.addTitle(
        //         data.results[0].title,
        //         data.results[0].imdbID,
        //         data.results[0].posterURLs.original
        //     )
        //     .catch(err => {console.error(err.stack)})
        //     res.json(data)
        // })
})
router
    .route("/titles")
    .get(HavenController.apiGet)

export default router