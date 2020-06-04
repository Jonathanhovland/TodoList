import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Button, TextField } from '@material-ui/core';



function TodoForm({ addTodo }) {
        const [todo, setTodo] = useState({
          id: "",
          task: "",
          status: false
        });

    function handleTaskInput(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
          addTodo({ ...todo, id: uuidv4() });
          setTodo({ ...todo, task: "" });
        }
      }

    return (
        <form className="todo-form" onSubmit={ handleSubmit }>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label="Task"
                name="task"
                type="text" 
                value={ todo.task }
                onChange= { handleTaskInput }
            />
            <Button type="submit">Add</Button>
        </form>
    )
}

export default TodoForm;