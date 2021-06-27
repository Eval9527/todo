import {ITodoData} from "./js/typing";
import {TodoEvent} from "./js/TodoEvent"

((doc) => {
    const dInput: HTMLInputElement = document.querySelector('input')
    const dAddBtn: HTMLElement = document.querySelector('button')
    const dTodoList: HTMLElement = document.querySelector('.todo-list')

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

    const todoEvent: TodoEvent = new TodoEvent(todoData)

    const init = (): void => {
        bindEvent()
    }

    function bindEvent(): void {
        dAddBtn.addEventListener('click', handleAddBtnClick, false)
        dTodoList.addEventListener('click', handleListClick, false)
    }

    function handleAddBtnClick(): void {
        todoEvent.addTodo(<ITodoData> {
            id: 4,
            content: '666',
            completed: false,
        })

        console.log(todoData)
    }

    function handleListClick(e: MouseEvent): void {
        const tar = e.target as HTMLElement
        const tagName = tar.tagName.toLocaleLowerCase()

        if (tagName === 'input' || tagName === 'button') {
            switch (tagName) {
                case "input":
                    break
                case "button":
                    break
                default:
                    break
            }
        }
    }

    init()
})(document)
