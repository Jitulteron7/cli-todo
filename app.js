
const fs =require('fs');

const addTodo= (data)=>{

    // for making the default index value change
    // let info=data.reduce((acc,{Id,...d})=>{acc[Id]=d;return  acc } ,{})
    fs.writeFile("todo-data/data.json",JSON.stringify(data),(error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("sucessfully");
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
const updateTodo=(id,data)=>{

}
const showTodo=()=>{
    fs.readFile("todo-data/data.json",(error,data)=>{
        if(error){
            console.log(error);
        }else{
            console.table(JSON.parse(data));
            // const array = [{myId: 42, name: 'John', color: 'red'}, {myId: 1337, name: 'Jane', color: 'blue'}]

            //     const transformed = array.reduce((acc, {myId, ...j}) => { acc[myId] = j; return acc}, {});

            //     console.table(transformed)

        }
    })
}

const showOneTodo=(show)=>{
    fs.readFile("todo-data/data.json",(error,data)=>{
        if(error){
            console.log(error);
        }else{

            console.table(JSON.parse(data),show);
            // const array = [{myId: 42, name: 'John', color: 'red'}, {myId: 1337, name: 'Jane', color: 'blue'}]

            //     const transformed = array.reduce((acc, {myId, ...j}) => { acc[myId] = j; return acc}, {});

            //     console.table(transformed)

        }
    })
}
module.exports = {addTodo,showTodo,deleteTask,showOneTodo}