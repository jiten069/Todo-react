import React from 'react';
import AddTodos from './components/AddTodos';
import Todo from './components/Todo';

function App() {
    return (
        <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-indigo-500 mb-8">Todo App</h1>
            <div className="w-full max-w-2xl">
                <AddTodos />
                <Todo />
            </div>
        </div>
    );
}

export default App;
