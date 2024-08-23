import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {  //handle logic for updating the state
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload //the data passed when the action is dispatched
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            //data  is passed to the reducer when the removeTodo action is dispatched.
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
