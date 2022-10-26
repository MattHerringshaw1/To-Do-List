

const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.listen(8080, function() {
    console.log("server is running ...")
})


let list = []

app.get("/list", (req, res) => {
    res.json(list)
})


app.post("/list", (req, res) => {
    const toDoTask = {title:req.body.title, priority:req.body.priority, date:req.body.date}
    list.push(toDoTask)
    res.json({message:"Task has been added"})
})