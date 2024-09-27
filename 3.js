let tasks = [];

tasks.push("Work");//Adds to array
tasks.length;

let addTask = (newTask) =>
{
    tasks.push(newTask);
    console.log(newTask + " has been added");
    return(tasks.length);
}

addTask("Study");
addTask("Exercise");

let listAllTasks = tasks.forEach((task) =>
{
    console.log(task);

    return(tasks.length);
})
    
console.log(listAllTasks);

let deleteTask = (task) =>
{
    let index = tasks.indexOf(task);
    console.log(task + " has been deleted");

    tasks.splice(index, 1);
    return(tasks.length);
}

deleteTask("Study");

console.log(tasks);
