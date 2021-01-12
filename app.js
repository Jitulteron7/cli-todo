
const fs =require('fs');

const addTodo= (data)=>{


    fs.writeFile("todo-data/data.json",JSON.stringify(data),(error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("sucessfully");
        }
    })
}
const showTodo=()=>{
    fs.readFile("todo-data/data.json",(error,data)=>{
        if(error){
            console.log("File is Empty");
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
                        console.log("sucessfully");
                    }
                });
                console.table(info);
            }
            
        }
    });
}
const deleteTODO=()=>{
   
    fs.unlink("todo-data/data.json",(error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("sucessfully");
        }
    });
    
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
                        if(info.Task.length){
                            data[i].Task=info.Task;
                        }
                         if(info.ImportanceLevel){
                            data[i].ImportanceLevel=info.ImportanceLevel;
                        }
                         if(info.TimeFrom){
                            data[i].TimeFrom=info.TimeFrom;
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