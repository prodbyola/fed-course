const collectValue = (id) => {
    const input = document.getElementById(id)
    return input.value
}

const insertTask = (label, desc, group) => {
    const cardEl = document.createElement('div')
    cardEl.classList.add('task_card')

    const labelEl = document.createElement('h4')
    labelEl.classList.add('task_label')
    labelEl.textContent = label
    cardEl.appendChild(labelEl)

    const descEl = document.createElement('p')
    descEl.classList.add('task_desc')
    descEl.textContent = desc
    cardEl.appendChild(descEl)

    const groupEl = document.createElement('p')
    groupEl.classList.add('task_group')
    groupEl.textContent = group
    cardEl.appendChild(groupEl)

    const taskEl = document.getElementById('tasks')
    taskEl.appendChild(cardEl)
}

const createTask = () => {
    const label = collectValue('task-label')
    const desc = collectValue('task-desc')
    const group = collectValue('task-group')


    insertTask(label, desc, group)
}