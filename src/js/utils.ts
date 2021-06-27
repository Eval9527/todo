/**
 * 寻找当前父节点
 * @param target
 * @param className
 */
function findParentNode(target: HTMLElement, className: string): HTMLElement {
    while (target = target.parentNode as HTMLElement) {
        if (target.className === className) {
            return target
        }
    }
}

/**
 * 创建节点
 * @param tagName
 * @param className
 * @param todoItem
 */
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
