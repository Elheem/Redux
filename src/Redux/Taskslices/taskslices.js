import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 0, title: 'elhem', isDone: true },
    { id: 1, title: 'benyahia', isDone: false }
]



export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state = state.push(action.payload)
        },
        deleteTask: (state, action) => {
            return state = state.filter((el) => el.id !== action.payload.id)
        },
        editTask: (state, action) => {
            return state = state.map(el => el.id === action.payload.id ? action.payload : el)

        }
    },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer