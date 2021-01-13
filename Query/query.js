const warningQuery=[
    {
        type:"confirm",
        name:"yOrNo",
        message:"Are you sure you want to delete all the tasks ?",
    }
]
const UpdateList=[
    {
        type:"input",
        name:"Task",
        message:"Task :",
        
    },
    {
        type:"input",
        name:"Time_From",
        message:"Time From :",
        
    },
    {
        type:"input",
        name:"Importance_Level",
        message:"Importance Level :",
        
    }
    // ,{
    //     DateAt:moment().format("MMM Do, h:mm a")  
    // }
]
const addQuery=[
    {
        type:"input",
        name:"Task",
        message:"Set Task",
    },
    {
        type:"input",
        name:"Time_From",
        message:"Set Time Interval",
    },
    {
        type:"input",
        name:"Importance_Level",
        message:"Set Importance Level",
    },
    // {
    //     DateAt:moment().format("MMM Do, h:mm a")  
    // }
]
const showQuery=[
    {
        type:"input",
        name:"Task",
        message:"Enter",
    },
    {
        type:"input",
        name:"Time_From",
        message:"Enter",
    },
    {
        type:"input",
        name:"Importance_Level",
        message:"Enter",
    }
]


module.exports={
    showQuery,
    UpdateList,
    addQuery,
    warningQuery
}