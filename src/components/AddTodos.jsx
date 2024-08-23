import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoslice';

function AddTodos() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input.trim()));  // dispatch=send
            setInput('');
        }
    };

    return (
        <div className="w-full mb-8 ">
            <form onSubmit={addTodoHandler} className="flex items-center">
                <input
                    type="text"
                    className="flex-grow bg-gray-800 rounded-l-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-r-lg text-lg transition-colors duration-200"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddTodos;
