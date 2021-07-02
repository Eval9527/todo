import $ from 'jquery'
import {ITodoData, IRequest} from "./typing";

function getTodoList(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
): void {
    // 保存原有的 init 函数
    const _origin = descriptor.value

    // 重写 init 函数
    descriptor.value = function (todoData: ITodoData[]) {
        $.get('http://localhost:8080/todolist').then((res:IRequest) => {
            console.log(res)
            if (!res.data.length) {
                return
            }

            todoData = res.data
        }).then(() => {
            _origin.call(this, todoData)
        })
    }
}


function removeTodo(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
): void {
    const _origin = descriptor.value

    descriptor.value = function (target: HTMLElement, id: number) {
        $.post('http://localhost:8080/remove', { id }).then((res:IRequest) => {
            _origin.call(this, target, id)
        })
    }
}

function toggleTodo(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
): void {
    const _origin = descriptor.value

    descriptor.value = function (target: HTMLElement, id: number) {
        $.post('http://localhost:8080/toggle', { id }).then((res:IRequest) => {
            _origin.call(this, target, id)
        })
    }
}

function addTodo(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
): void {
    const _origin = descriptor.value

    descriptor.value = function (todo: ITodoData) {
        $.post('http://localhost:8080/add', { todo: JSON.stringify(todo) }).then((res: IRequest) => {
            if (res.statusCode === 100) {
                alert('该项已存在！')
                return
            }
            _origin.call(this, todo)
        })
    }
}

export {
    getTodoList,
    removeTodo,
    toggleTodo,
    addTodo,
}
