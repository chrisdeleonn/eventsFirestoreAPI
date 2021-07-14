//building an API & not connecting to a dB
const express = require("express")
const cors = require("cors")
const { getEvents } = require("./src/events")

const app = express()
app.use(cors())

app.get("/events", getEvents)

app.get("/", (req, res) => {
  res.send("this is our first get, get it?")
})

app.listen(5000, () => {
  console.log("Houston, we're connected to port 5000.")
})
