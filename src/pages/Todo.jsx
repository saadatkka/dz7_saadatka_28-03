import React from 'react';
import {useState} from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function inputChange(e){
        setNewTask(e.target.value)
    }
    function handleAddTask (){
        setTasks([...tasks, newTask])
        setNewTask('')
    }
    return (
        <div>
            <h1>TodoList</h1>
            <div>
                <input value={newTask} onChange={inputChange} type="text"/>
                <button onClick={handleAddTask}>addTask</button>
            </div>
            <div>
                <ul>
                    {tasks.map((task,key)=>(
                        <li key={key}>{task}</li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default Todo;