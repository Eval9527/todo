import {ITodoData} from "./js/typing";
import {TodoEvent} from "./js/TodoEvent"

((doc) => {
    const dInput: HTMLInputElement = document.querySelector('input')  // input 输入框
    const dAddBtn: HTMLElement = document.querySelector('button')  // button 增加按钮
    const dTodoList: HTMLElement = document.querySelector('.todo-list')  // todo 列表

    // 初始数据
    const todoData: ITodoData[] = [
        {
            id: 1,
            content: '123',
            completed: true,
        },
        {
            id: 2,
            content: '456',
            completed: false,
        },
        {
            id: 3,
            content: '789',
            completed: true,
        }
    ]

    const todoEvent: TodoEvent = new TodoEvent(todoData, dTodoList)

    const init = (): void => {
        bindEvent()
    }

    function bindEvent(): void {
        dAddBtn.addEventListener('click', handleAddBtnClick, false)
        dTodoList.addEventListener('click', handleListClick, false)
    }

    // 添加操作
    function handleAddBtnClick(): void {
        const value: string = dInput.value.trim()

        if (value.length) {
            const result: undefined | number = todoEvent.addTodo(<ITodoData> {
                id: new Date().getTime(),
                content: value,
                completed: false,
            })

            if (result && result === 1001) {
            alert('列表项已存在')
                dInput.select()
                return
            }

            dInput.value = ''
            dInput.focus()
        }
    }

    // 每个 todo 子项的状态改变、删除事件
    function handleListClick(e: MouseEvent): void {
        const tar = e.target as HTMLElement
        const tagName = tar.tagName.toLocaleLowerCase()

        if (tagName === 'input' || tagName === 'button') {
            const id = parseInt(tar.dataset.id)
            switch (tagName) {
                case "input":
                    todoEvent.toggleComplete(tar, id)
                    break
                case "button":
                    todoEvent.removeTodo(tar, id)
                    break
                default:
                    break
            }
        }
    }

    init()
})(document)
