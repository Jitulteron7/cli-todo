const moment=require('moment');
const {addTodo,showTodo,deleteTask,showOneTodo,deleteTODO,updateTodo} =require("./app")
const execa=require("execa");
// execa("git",["add","package.json"]);

const structDatas = [
    { "Task": 'http', "Time_From": 'http://localhost:3000/path',"ImportanceLevel":"2","Set_At":moment(),"Updated_At":moment()},
    { "Task": 'http', "Time_From": 'http://localhost:3000/path',"ImportanceLevel":"2","Set_At":moment(),"Updated_At":moment()},
    { "Task": 'http', "Time_From": 'http://localhost:3000/path',"ImportanceLevel":"2","Set_At":moment(),"Updated_At":moment()},
    { "Task": 'http', "Time_From": 'http://localhost:3000/path',"ImportanceLevel":"2","Set_At":moment(),"Updated_At":moment()},
    { "Task": 'http', "Time_From": 'http://localhost:3000/path',"ImportanceLevel":"2","Set_At":moment(),"Updated_At":moment()},
    
       
];


// showOneTodo(["go","handler"])
// addTodo(structDatas)
// showTodo();
updateTodo(1,{Task:"Kankan",TimeFrom:"3-4 PM"});
// deleteTODO();
// deleteTask(1);
