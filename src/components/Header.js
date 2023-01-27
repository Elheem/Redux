import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/Taskslices/taskslices'

function Header() {
    const [newTask, setnewTask] = useState({ title: "" });
    const dispatch = useDispatch()
    return (
        <div>
            <input value={newTask.title} type="text" placeholder='to do' onChange={(e) => setnewTask({ ...newTask, title: e.target.value })} />
            <button onClick={() => {
                dispatch(addTask(({ ...newTask, isDone: false, id: Math.floor(Math.random() * 100) })))
                setnewTask({ title: '' })
            }}>Add
            </button>
        </div>
    )
}

export default Header