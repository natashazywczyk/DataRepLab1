let tasks = [];

tasks.push("Work");//Adds to array
tasks.length;

//AddTask Method
let addTask = (newTask) =>
{
    tasks.push(newTask);
    console.log(newTask + " has been added");
    return(tasks.length);
}

addTask("Study");
addTask("Exercise");

//ListAllTasks Method
/*let listAllTasks = tasks.forEach((task) =>
{
    console.log(task);

    return(tasks.length);
})*/

let listAllTasks = () =>
{
    tasks.forEach((task) => {
        console.log(task);
    })
}

listAllTasks();

//DeleteTask Method
let deleteTask = (task) =>
{
    let index = tasks.indexOf(task);
    if(index > -1)
    {
        tasks.splice(index, 1);
        console.log(task + " has been deleted");
    }
    else
    {
        console.log( task + " is not in my tasks");
    }
    console.log(tasks.length + " tasks are left");
    return(tasks.length);
}
deleteTask("Study");

