import TaskManager from './taskManager.js';

const taskManager = new TaskManager();

taskManager.addTask('task 1', 'add classes');
taskManager.addTask('task 2', 'make getters');


console.log(taskManager.displayInConsole());