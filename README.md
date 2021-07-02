# 使用 TypeScript + Vite 写的原生 TODO，仅前端

## 面向对象、类的继承、横向切割程序
1. 程序进行分类  
    外层：浏览器的事件 -> 调用方法 -> 事件处理函数的绑定  
    操作数据：addTodo、removeTodo、toggleComplete  
    操作DOM：addItem、removeItem、changeCompleted  
    管理模版：todoView -> 接受参数


## 使用
```shell
npm i
npm run dev
```

## 说明
项目结构
```markdown
todo
 ├── index.html
 └── src
     ├── app.ts
     └── js
         ├── TodoDom.ts  // todo dom 操作
         ├── utils.ts  // 工具类
         ├── TodoEvent.ts  // todo 事件
         ├── TodoTemplate.ts  // 渲染 todo-item 的 DOM 模板
         └── typing.ts  // 接口
```
