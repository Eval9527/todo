import $ from 'jquery'
import {ITodoData} from "./typing";

function getTodoList(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
): void {
    // 保存原有的 init 函数
    const _origin = descriptor.value

    // 重写 init 函数
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


function removeTodo(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
): void {
    const _origin = descriptor.value

    descriptor.value = function (target: HTMLElement, id: number) {
        $.post('http://localhost:8080/remove', { id }).then((res:string) => {
            _origin.call(this, target, id)
        })
    }
}

export {
    getTodoList,
    removeTodo,
}
