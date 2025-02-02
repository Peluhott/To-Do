const unassignedTasks = []

function addTaskToUnassigned(task){
    unassignedTasks.push(task);
}

function removeTaskFromUnassigned(index){
  
        unassignedTasks.splice(index,1);
    
}