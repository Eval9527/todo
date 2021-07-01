import {readFileSync, writeFileSync} from "fs";
import {resolve} from "path";
import {ITodoData} from "../src/js/typing";


function readFile(path: string): string {
    return readFileSync(resolve(__dirname, 'todo.json'), 'utf-8')
}

function writeFile<T> (path: string, data: T): void {
    writeFileSync(resolve(__dirname, path), JSON.stringify(data))
}

function fileOperation(path: string, fn?: any): string | void {
    let todoList: ITodoData[] = JSON.parse(readFile(path) || '[]')

    if (!fn) {
        return JSON.stringify(todoList)
    }

    todoList = fn(todoList)

    writeFile<ITodoData[]>(path, todoList)
}

export {
    readFile,
    writeFile,
    fileOperation,
}
