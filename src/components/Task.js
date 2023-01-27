import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../Redux/Taskslices/taskslices'

function Task({ task }) {
    const dispatch = useDispatch()
    const [OnUpdate, setOnUpdate] = useState(false)
    const [newTask, setnewTask] = useState(task);
    return (
        <div className={task.isDone ? 'done ' : "notdone"}
            onClick={() => dispatch(editTask({ ...newTask, isDone: !task.isDone }))} >
            {OnUpdate ?
                <> <input type={'text'} defaultValue={task.title} onChange={(e) => setnewTask({ ...newTask, title: e.target.value })} />
                    <button onClick={() => {
                        dispatch(editTask(newTask))
                        setOnUpdate(false)
                    }}>
                        Confirm</button>
                    <button onClick={() => setOnUpdate(false)}>Cancel</button>
                </>
                : <> <h3>{task?.title}</h3>
                    <button onClick={() => setOnUpdate(true)}>Update</button>
                    <button onClick={() => dispatch(deleteTask(task))}>Delete</button></>}
        </div>
    )
}

export default Task