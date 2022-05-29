import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addInitTodo: (state, action) => {
            const { data } = action.payload
            state.todos = data
        },
        addTodo: (state, action) => {
            const { data } = action.payload
            state.todos.push(data)
        },
        updateStatus: (state, action) => {
            const index = state.todos.findIndex(
                todo => todo.id === action.payload.id,
            )
            state.todos[index].completed = action.payload.completed
        },
        updateTodoName: (state, action) => {
            const index = state.todos.findIndex(
                todo => todo.id === action.payload.id,
            )
            state.todos[index].name = action.payload.name
        },
        deleteTodo: (state, action) => {
            const currentTodo = element => element.id === action.payload.id
            const currentIndex = state.todos.findIndex(currentTodo)

            if (currentIndex > -1) {
                state.todos.splice(currentIndex, 1)
            }
        },
        filterTodo: (state, action) => {
            state.todos.filter(todo => todo.completed !== action.payload.status)
        },
    },
})

export const {
    addTodo,
    addInitTodo,
    updateStatus,
    updateTodoName,
    deleteTodo,
    filterTodo,
} = todoSlice.actions
export default todoSlice.reducer
