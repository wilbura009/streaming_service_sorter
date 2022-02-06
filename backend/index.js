import app from "./server.js"

const port = 5000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})