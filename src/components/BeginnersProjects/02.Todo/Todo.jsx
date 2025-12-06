import { useState } from 'react';
import "./style.css";

const generateId = () => Math.floor(Math.random() * 10);

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setTodos((todos) => todos.concat({text: input, id: generateId()}));
        setInput("");
    }

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }

    return (
        <div className="container">
            <input type="text"  value={input} onChange={(e) => setInput(e.target.value)} />

            <button onClick={handleSubmit}>添加</button>
            <ul className="todos-list">
                {todos.map((todo) => (
                    <li key={todo.id} className='todo'>
                        <span>{todo.text}</span>
                        <button onClick={() => removeTodo(todo.id)}>删除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;