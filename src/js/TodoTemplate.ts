import {ITodoData} from "./typing";

class TodoTemplate {
    protected todoView({id, content, completed}: ITodoData): string {
        return `
            <input type="checkbox" ${completed ? 'checked': ''} data-id="${id}"/>
            <span style="text-decoration: ${completed ? 'line-through': 'none'}">${content}</span>
            <button data-id="${id}">删除</button>
        `
    }
}

export {
    TodoTemplate
}
