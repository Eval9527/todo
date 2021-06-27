function findParentNode(target: HTMLElement, className: string): HTMLElement {
    while (target = target.parentNode as HTMLElement) {
        if (target.className === className) {
            return target
        }
    }
}

function createItem(tagName: string, className: string, todoItem: string): HTMLElement {
    const dItem: HTMLElement = document.createElement(tagName)
    dItem.className = className
    dItem.innerHTML = todoItem

    return dItem
}


export {
    findParentNode,
    createItem,
}
