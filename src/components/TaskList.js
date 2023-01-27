import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../Redux/store'
import Task from './Task'

const TaskList = () => {
    const tasks = useSelector((store) => store.task)
    return (
        <div>
            {tasks.map((task, i) => <Task key={i} task={task} /> )}
        </div>
    )
}

export default TaskList