import express, { Application } from "express";
import bodyParse from 'body-parser'
import {fileOperation, readFile, writeFile} from "./utils";
import {ITodoData} from "../src/js/typing";

const app: Application = express()

app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())

app.all('*', ((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next()
}))

app.get('/todolist', function (req, res) {
    const todoList = fileOperation('todo.json') as string
    res.send(todoList)
})

app.post('/toggle', function (req, res) {

})

app.post('/remove', function (req, res) {
    const id: number = parseInt(req.body.id)

    fileOperation('todo.json', function (todoList: ITodoData[]) {
        return todoList.filter((todo: ITodoData) => todo.id !== id)
    })

    res.send({
        msg: 'ok',
        statusCode: 200
    })
})

app.post('/add', function (req, res) {

})

app.listen(8080, function () {
    console.log('Hello, my express')
})
