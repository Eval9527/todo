# 使用 TypeScript + Express + 装饰器 + Vite 写的原生 TODO

分支

```
master  // TS + Express + 装饰器 + Vite 编写的前后端 TODO
front   // TS + Vite 编写的原生 TODO
```

## 设计模式
    外层：浏览器的事件 -> 调用方法 -> 事件处理函数的绑定  
    操作数据：addTodo、removeTodo、toggleComplete、使用装饰器向后端传递数据  
    操作DOM：addItem、removeItem、changeCompleted  
    管理模版：todoView -> 接受参数


## 使用
```shell
npm i
npm run dev # 前端运行
npm run server  # 后端运行
```

## 说明

项目结构

```
todo
 ├── server
 │   ├── app.ts
 │   ├── typing.ts  // 接口类型
 │   ├── todo.json  // 初始数据
 │   └── utils.ts   // 工具类
 ├── tsconfig.json
 ├── index.html
 └── src
     ├── app.ts
     └── js
         ├── TodoService.ts // 装饰器，用于请求数据
         ├── TodoDom.ts // todo dom 操作
         ├── utils.ts   // 工具类
         ├── TodoEvent.ts   // todo 事件
         ├── TodoTemplate.ts    // 渲染 todo-item 的 DOM 模板
         └── typing.ts  // 接口
```


感谢 [小野老师](https://www.bilibili.com/video/BV1Jt4y1k7dS)
