import { configureStore } from "@reduxjs/toolkit";  //simplifies creating a Redux store. 
import todoReducer from '../features/todo/todoslice';

export const store= configureStore({
    reducer: todoReducer  //it take the current state, add to new state, and return to updated state."
})

