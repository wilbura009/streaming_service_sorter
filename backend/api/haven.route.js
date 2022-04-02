import express, { response } from "express"
import HavenDAO from "../ao/havenAO.js"
import axios from "axios"
import HavenController from "./haven.controller.js"

const router = express.Router()


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
            keyword: 'Ozark'
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
            const TitleResponse = HavenDAO.addTitle(
                data.results[0].title,
                data.results[0].imdbID
            )
            .catch(err => {console.error(err.stack)})
            res.json(data)
        })
})
router.route("/titles").get(HavenController.apiGet)

export default router