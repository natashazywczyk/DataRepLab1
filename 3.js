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



//let deleteTask
//let index = tasks.indexOf(value);

//tasks.splice(index, 1);