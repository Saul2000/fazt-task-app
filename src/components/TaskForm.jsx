import React from 'react'
import { useState, useContext } from 'react';

import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { createTask } = useContext(TaskContext)
    // console.log(value)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({ title, description });
        setTitle('')
        setDescription('')
        // console.log(title)
        // const newTask = {
        //     title,
        //     id: 4,
        //     description
        // }
        // console.log(newTask)
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <h1 className='text-2xl font-bold mb-3 text-white'>Create Task</h1>
                <input placeholder='Write your Task'
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title}
                    autoFocus
                    className='bg-slate-300 px-3 w-full mb-2'
                />
                <textarea placeholder='Write task Description'
                    onChange={(e) => { setDescription(e.target.value) }} value={description}
                    className='bg-slate-300 px-3 w-full mb-2'></textarea>
                <button className='bg-indigo-500 px-3 py-1 text-white mx-auto'>Save</button>
            </form>
        </div>
    );
}

export default TaskForm