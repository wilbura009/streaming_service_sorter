import express, { response } from "express"
import axios from "axios"
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
            res.json(data)
        })
})

export default router