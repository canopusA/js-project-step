import Task from './task.js';

export default class TaskManager {
  #tasks = [];
  
  addTask(title, description) {
    const creationDate = new Date().toLocaleString('en-GB');
    const task = new Task(title, description, creationDate);
    this.#tasks.push(task);
  }

  getTasks() {
    return this.#tasks;
  }

  displayInConsole(){
    this.#tasks.forEach(element => {
      console.log(element.title);
      console.log(element.description);
      console.log(element.creationDate);
      console.log(element.isCompleted);
      console.log(element.id);
    });
  }

}