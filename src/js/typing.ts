interface ITodoData {
    id: number
    content: string
    completed: boolean
}

interface IRequest {
    msg: string
    statusCode: number
    data?: ITodoData[]
}

export {
    ITodoData,
    IRequest,
}
