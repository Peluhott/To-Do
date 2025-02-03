import Task from "./task";
class Project {
    constructor(name, category){
        this._name = name;
        this._category = category;
        this.listOfTasks = [];
    }

    addTask(task) {
        this.listOfTasks.push(task);
        

    }
    
    removeTask(taskToRemove){
        this.listOfTasks = this.listOfTasks.filter(task => task !== taskToRemove);
    }

   }
export default Project;
    
