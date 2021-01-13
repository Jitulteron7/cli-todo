#!/usr/bin/env node
// const moment=require('moment');
const {addTodo,showTodo,deleteTask,showOneTodo,deleteTODO,updateTodo} =require("./app")
const {program}=require("commander");
const inquierer=require("inquirer");
const inquirer = require('inquirer');
const moment=require('moment');
const chalk=require('chalk');
const {UpdateList,warningQuery,addQuery,showQuery} =require("./Query/query");
program
.version("1.0.0")
.description("An advance todo list cli. All the crud features are included");


program
.command("add")
.alias("a")
.description("to add task")
.action(()=>{
    console.log(chalk.yellow("----------",moment().format("MMM Do h:mm a"),"----------"));
    inquierer.prompt(addQuery).then(answer=>{
      addTodo(answer);
    })
})

program
.command("delete1 <index>")
.alias("del1")
.description("to delete one task")
.action((index)=>{
    console.log(chalk.yellow("----------",moment().format("MMM Do h:mm a"),"----------"));
    deleteTask(index);
})

program
.command("deleteA")
.alias("delA")
.description("to delete all the task")
.action(()=>{
    console.log(chalk.yellow("----------",moment().format("MMM Do h:mm a"),"----------"));
    inquierer.prompt(warningQuery).then((boolean)=>{
        deleteTODO(boolean.yOrNo);
        
    })
})

program
.command("updateO <index>")
.alias("uO")
.description("to update data from neccesary")
.action((index)=>{
    console.log(chalk.yellow("----------",moment().format("MMM Do h:mm a"),"----------"));
    inquierer.prompt(UpdateList).then(ans=>{
        updateTodo(index,ans)
        
    })
})


program
.command("show")
.alias("s")
.description("to show all the todo list")
.action(()=>{
    
    console.log(chalk.yellow("----------",moment().format("MMM Do h:mm a"),"----------"));
    showTodo();
})

program
.command("fetch")
.alias("f")
.description("to show task which you want to see")
.action(()=>{
    console.log(chalk.yellow("----------",moment().format("MMM Do h:mm a"),"----------"));
    inquierer.prompt(showQuery).then(ans=>{
        
        showOneTodo(Object.values(ans));
    });
})


program.parse(process.argv);