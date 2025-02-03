const unassignedTasks = []

function addTaskToUnassigned(task){
    unassignedTasks.push(task);
}

function removeTaskFromUnassigned(index){
  
        unassignedTasks.splice(index,1);
    
}
export default {unassignedTasks, addTaskToUnassigned, removeTaskFromUnassigned}
// import this as default when you finish