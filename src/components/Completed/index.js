
    import React, { useState } from 'react';

    
    function Task({ task, index, removeTask }) {
        return (
            <div>{task.completed ? <div className="task" style={{ textDecoration: task.completed ? "line-through" : "" }}>
                {task.title}
                <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            </div> : null}
            </div>
            
        );
    }


    
    function Completed() {
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
    
    
        const completeTask = index => {
            const newTasks = [...tasks];
            newTasks[index].completed = true;
            setTasks(newTasks);
        };
    
        const removeTask = index => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
        };
    
        return (
            <div className="todo-container">
                <div className="tasks">
                {tasks.map((task, index) => (
                        <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                        key={index}
                        />
                    ))}
                </div>

            </div>
        );
    }
    
    export default Completed;