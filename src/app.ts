import {ITodoData} from "./js/typing";

;((doc) => {
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

    const init = (): void => {
        bindEvent()
    }

    function bindEvent(): void {
        dAddBtn.addEventListener('click', handleAddBtnClick, false)
        dTodoList.addEventListener('click', handleListClick, false)
    }

    function handleAddBtnClick(): void {

    }

    function handleListClick(e: MouseEvent): void {

    }

    init()
})(document)
