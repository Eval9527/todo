import {ITodoData} from "./typing";
import {TodoTemplate} from "./TodoTemplate";
import {createItem, findParentNode} from "./utils";

class TodoDom extends TodoTemplate{
    private todoWrapper: HTMLElement

    constructor(todoWrapper: HTMLElement) {
        super()
        this.todoWrapper = todoWrapper
    }

    protected initList(todoData: ITodoData[]) {
        todoData.map(todo => this.addItem(todo))
    }

    protected addItem(todo: ITodoData) {
        const dItem: HTMLElement = createItem('div', 'todo-item', this.todoView(todo))
        this.todoWrapper.appendChild(dItem)
    }

    protected removeItem(target: HTMLElement) {
        const dParentNode: HTMLElement = findParentNode(target, 'todo-item')
        dParentNode.remove()
    }

    protected changeCompleted(target: HTMLElement, completed: boolean) {
        const dParentNode: HTMLElement = findParentNode(target, 'todo-item')
        const dContent: HTMLElement = dParentNode.querySelector('span')

        dContent.style.textDecoration = completed ? 'line-through' : 'none'
    }
}

export {
    TodoDom
}
