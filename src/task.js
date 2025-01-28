class Task {
    
    constructor(name, description, date, priority){
        this._name = name;
        this._description = description;
        this._date = date;
        this._priority = priority;
    }

    getName() {
        return this._name;
    }

    setName(newName){
        this._name = newName;
    }

    getDescription(){
        return this._description;
    }
    
    setDescription(description){
        this._description = description;
    }

    getDate() {
        return this._date;
    }

    setDate(date){
        this._date = date;
    }

    setPriority(priority) {
        this._priority = priority;

    }

    getPriority(){
        return this._priority;

    }
    

}

export default Task;