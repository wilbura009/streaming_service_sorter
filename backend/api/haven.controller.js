import HavenDAO from "../ao/havenAO.js"

export default class HavenController{
    static async apiGet(req, res, next) {
        try {
            const titlesPerPage = req.query.titlesPerPage ? parseInt(req.query.titlesPerPage, 10) : 20
            const page = req.query.page ? parseInt(req.query.page, 10) : 0

            const { titles, totalTitles } = await HavenDAO.getTitles({
                titlesPerPage, 
                page
            })
            let response = {
                titles: titles,
                page: page,
                entries_per_page: titlesPerPage,
                totalTitles: totalTitles,
            }
            res.json(response)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}