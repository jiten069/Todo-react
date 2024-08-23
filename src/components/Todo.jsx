import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoslice';

function Todo() {
const todos = useSelector((state) => state.todos); //allows you to access and extract data (state) from the Redux store. 
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleUpdateClick = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (editText.trim()) {
            dispatch(updateTodo({ id: editId, text: editText.trim() }));
            setEditId(null);
            setEditText('');
        }
    };

    return (
        <div className="w-full ">
            <h2 className="text-3xl text-white font-semibold mb-4">Your Todos</h2>
            <ul className="space-y-4">
                {todos.map((todo) => (
                    <li
                        className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md"
                        key={todo.id}
                    >
                        {editId === todo.id ? (
                            <form onSubmit={handleUpdateSubmit} className="flex-grow flex">
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="flex-grow text-white px-4 py-2 rounded-l-md focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-r-md text-md transition-colors duration-200"
                                >
                                    Save
                                </button>
                            </form>
                        ) : (
                            <>
                                <div className="text-white flex-grow text-lg">{todo.text}</div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleUpdateClick(todo)}
                                        className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-md transition-colors duration-200"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-md transition-colors duration-200"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
