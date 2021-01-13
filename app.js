
const fs =require('fs');
const chalk=require('chalk');
const addTodo= (info)=>{


    fs.readFile("todo-data/data.json",(err,data)=>{
        
        if(data){
            let arrData=Object.values(JSON.parse(data));
            
            arrData.push(info);
            
            fs.writeFile("todo-data/data.json",JSON.stringify(arrData),(error)=>{
                if(error){
                    console.log(chalk.red.bold.underline("Unable to add somthing went wrong"));
                }else{
                    
                    console.table(arrData);
                    console.log(chalk.green.bold.underline("Added Sucessfully"));
                }
            })
        }else if(err){
            let arr=[];
            arr.push(info);
            fs.writeFile("todo-data/data.json",JSON.stringify(arr),(error)=>{
                if(error){
                    console.log(chalk.red.bold.underline("Unable to add somthing went wrong"));
                }else{
                    console.log(chalk.green.bold.underline("Added Sucessfully"));
                }
            })
        }
    })
}
const showTodo=()=>{
    fs.readFile("todo-data/data.json",(error,data)=>{
        if(error){
            console.log(chalk.red.bold.underline("Data Empty"));
        }else{
            console.table(JSON.parse(data));      

        }
    })
}

const showOneTodo=(show)=>{
    fs.readFile("todo-data/data.json",(error,data)=>{
        if(error){
            console.log(error);
        }else{

            console.table(JSON.parse(data),show); 
        }
    })
}

const deleteTask=(task)=>{
    fs.readFile("todo-data/data.json",(error,data)=>{
        if(error){
            console.log(error);
        }else{
            if(data){
                let info=JSON.parse(data);

                delete info[task];
                // index refactor
                info=Object.values(info);
               
                fs.writeFile("todo-data/data.json",JSON.stringify(info),(error)=>{
                    if(error){
                        console.log(error);
                    }else{
                        console.info(chalk.green.bold.underline("Deleted Sucessfully"));
                    }
                });
                console.table(info);
            }
            
        }
    });
}
const deleteTODO=(yOrNO)=>{
    
   if(yOrNO){
    fs.unlink("todo-data/data.json",(error)=>{
        if(error){
            console.info(chalk.red.bold.underline("Empty File"));
        }else{
            console.info(chalk.green.bold.underline(" Sucessfully Deleted All"));
        }
    });
   }else{
       process.exit();
   }
    
    
}
                

             

const updateTodo=(id,info)=>{
    fs.readFile("todo-data/data.json",(error,data)=>{
        if(error){
            console.log(error);
        }else{
            if(data){
                data=JSON.parse(data);
              for(var i=0;i<data.length;i++){
                    if(i==id){
                        if(info.Importance_Level){
                            data[i].Importance_Level=info.Importance_Level;
                        }
                        if(info.Task){
                            data[i].Task=info.Task;
                        }
                         
                         if(info.Time_From){
                            data[i].Time_From=info.Time_From;
                        }
            
                    }
                }   
                console.table(data);
                fs.writeFile("todo-data/data.json",JSON.stringify(data),(error)=>{
                    if(error){
                        console.log(error);
                    }else{
                        console.log("sucessfully");
                    }
                });  
                
            }
            
        }
    });
}

module.exports = {addTodo,showTodo,deleteTask,showOneTodo,updateTodo,deleteTODO}