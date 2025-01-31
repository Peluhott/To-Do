class Project {
    constructor(){
        this.listOfTasks = [];
    }

    addTask(task) {
        this.listOfTasks.push(task);
        

    }
    
    removeTask(taskToRemove){
        this.listOfTasks = this.listOfTasks.filter(task => task !== taskToRemove);
    }

   }

    
