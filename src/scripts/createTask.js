import { tasksList } from './tasksList.js'
import { renderTasks } from './render.js'
import { setItem } from './storage.js'

const createId = () => Math.random().toFixed(2) * 100

const listElem = document.querySelector('.list')

const input = document.querySelector('.task-input')

export function createTask() {
  listElem.innerHTML = ''

  if (input.value !== '') {
    tasksList.unshift({
      text: input.value,
      done: false,
      id: createId(),
      checked: false,
    })
  }

  input.value = ''
  renderTasks(tasksList)
  setItem('tasksList', tasksList)
}
