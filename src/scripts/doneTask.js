import { tasksList } from './tasksList.js'
import { renderTasks } from './render.js'
import { setItem } from './storage.js'

const listElem = document.querySelector('.list')

export function doneTask(event) {
  const elemId = event.target.dataset.id
  const task = tasksList.find(task => Number(task.id) === Number(elemId))

  if (task) {
    task.done = !task.done
    task.checked = event.target.checked
    listElem.innerHTML = ''
    renderTasks(tasksList)
    setItem('tasksList', tasksList)
  }
}
