
export default class HavenApiObject {
    static async apiGetTitles() {
        const params = new URLSearchParams({
            country: 'us',
            service: 'netflix',
            type: 'series',
            keyword: 'Ozark'
        })

        const url = `https://streaming-availability.p.rapidapi.com/search/basic?${params.toString()}`
        fetch(url, {
            headers: {
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
                'X-RapidAPI-Key': '8f72a3e46bmsh81804a6eb2f8786p1c59e2jsne3c3ab52c4fd'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

}
