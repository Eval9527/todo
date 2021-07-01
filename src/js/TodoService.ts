import $ from 'jquery'
import {ITodoData} from "./typing";

function getTodoList(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
) {
    const _origin = descriptor.value

    descriptor.value = function (todoData: ITodoData[]) {
        $.get('http://localhost:8080/todolist').then((res:string) => {
            if (!res) {
                return
            }

            todoData = JSON.parse(res)
        }).then(() => {
            _origin.call(this, todoData)
        })
    }
}

export {
    getTodoList
}
