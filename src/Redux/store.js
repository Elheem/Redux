import { configureStore } from '@reduxjs/toolkit'
import taskslices from './Taskslices/taskslices'

export const store = configureStore({
    reducer: { task: taskslices },
})