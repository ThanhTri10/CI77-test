
    
    import React, { useState } from 'react';
    import './todo.css';
    
    function Task({ task, index, completeTask }) {
        return (
            
            <div
                className="task"
                style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
                {task.title}
                <button onClick={() => completeTask(index)}>Complete</button>
            </div>
        );
    }

    function CreateTask({ addTask }) {
        const [value, setValue] = useState("");
    
        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            
            addTask(value);
            setValue("");
        }
        
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add a new task"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        );
    }

    
    function Todo() {
        const [tasks, setTasks] = useState([
            {
                title: "Eat",
                completed: true
            },
            {
                title: "Sleep",
                completed: true
            },
            {
                title: "Code",
                completed: false
            }
        ]);
    
        const addTask = title => {
            const newTasks = [...tasks, { title, completed: false }];
            setTasks(newTasks);
        };
    
        const completeTask = index => {
            const newTasks = [...tasks];
            newTasks[index].completed = true;
            setTasks(newTasks);
        };
    
    
        return (
            <div className="todo-container">
                {/* <h1>Todo</h1> */}
                <div className="create-task">
                    <CreateTask addTask={addTask} />
                </div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        // removeTask={removeTask}
                        key={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
    
    export default Todo;