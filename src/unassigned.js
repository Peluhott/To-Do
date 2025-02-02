const unassignedTasks = []

function addTaskToUnassigned(task){
    unassignedTasks.push(task);
}

function removeTaskFromUnassigned(index){
  
        unassignedTasks.splice(index,1);
    
}

// import this as default when you finish