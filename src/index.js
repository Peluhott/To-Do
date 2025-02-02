import { projectContainer } from "./domLoader";
import { mainContainer } from "./domLoader";


const taskDial = document.getElementById('taskDialog');
const openButton1 = document.querySelector('.task-creator');
const closeButton1 = document.getElementById('closeBtn1');
const userForm1 = document.getElementById('task-form');

openButton1.addEventListener('click', () => {
    taskDial.showModal();
});

closeButton1.addEventListener('click', () => {
    taskDial.close();
});

userForm1.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskName = document.getElementById('name').value;
    const taskDescription = document.getElementById('description').value;
    const taskDate = document.getElementById('date').value;
    const taskPriority = document.getElementById('priority').value;
    // need to call constructor make task object
});

const projectDial = document.getElementById('projectDialog');
const openButton2 = document.querySelector('.project-creator');
const closeButton2 = document.getElementById('closeBtn2');
const userForm2 = document.getElementById('project-form');

openButton2.addEventListener('click', () => {
    projectDial.showModal();
});

closeButton2.addEventListener('click', () => {
    projectDial.close();
});

userForm2.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectName = document.getElementById('projectName').value;
    const projectCategory = document.getElementById('category').value;
    // need to call constructor make project object
});