const {addTodo,showTodo,deleteTask,showOneTodo} =require("./app")
const execa=require("execa");
// execa("git",["add","package.json"]);

const structDatas = [
    { handler: 'http', endpoint: 'http://localhost:3000/path', method: 'ALL' },
    {handler: 'event', endpoint: 'http://localhost:3000/event', method: 'POST' },
    { handler: 'GCS', endpoint: 'http://localhost:3000/GCS', method: 'POST'},
       
];


// showOneTodo(["go","handler"])
// addTodo(structDatas)
showTodo();
// deleteTask(1);
// console.table(structDatas);