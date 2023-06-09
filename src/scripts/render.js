const listElem = document.querySelector('.list')

export const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li')
      listItemElem.classList.add('list__item')
      listItemElem.dataset.id = id

      const checkbox = document.createElement('input')
      checkbox.setAttribute('type', 'checkbox')
      checkbox.checked = done
      checkbox.dataset.id = id
      checkbox.classList.add('list__item-checkbox')
      if (done) {
        listItemElem.classList.add('list__item_done')
      }
      listItemElem.append(checkbox, text)

      return listItemElem
    })

  listElem.append(...tasksElems)
}
