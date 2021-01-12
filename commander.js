const {addTodo,showTodo,deleteTask,showOneTodo} =require("./app")
const execa=require("execa");
// execa("git",["add","package.json"]);

const structDatas = [
    { handler: 'http', endpoint: 'http://localhost:3000/path', method: 'ALL' },
    {handler: 'event', endpoint: 'http://localhost:3000/event', method: 'POST' },
    { handler: 'GCS', endpoint: 'http://localhost:3000/GCS', method: 'POST' ,go:{date:'1/12/2021',date1:"asd"}},
       
];


// showOneTodo(["go","handler"])
// addTodo(structDatas)
// showTodo();
deleteTask(1);
// console.table(structDatas);