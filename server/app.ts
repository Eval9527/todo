import express, { Application } from "express";
import bodyParse from 'body-parser'

const app: Application = express()

app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())

app.all('*', ((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next()
}))

app.get('/todolist', function (req, res) {
    res.send('ok')
})

app.post('/toggle', function (req, res) {

})

app.post('/remove', function (req, res) {

})

app.post('/add', function (req, res) {

})

app.listen(8080, function () {
    console.log('Hello, my express')
})
