import { tasksList } from './tasksList.js'
import { renderTasks } from './render.js'
import { createTask } from './createTask.js'
import { doneTask } from './doneTask.js'
import { setItem, getItem } from './storage.js'

const listElem = document.querySelector('.list')

const savedTasksList = getItem('tasksList')

if (savedTasksList) {
  tasksList.push(...savedTasksList)
}

renderTasks(tasksList)

const button = document.querySelector('.create-task-btn')

button.addEventListener('click', createTask)

listElem.addEventListener('click', doneTask)
