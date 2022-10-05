import {useState,useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescrption] = useState('');

    const {createTask} = useContext(TaskContext)

    const handleSumit = (e) =>{
        e.preventDefault();
        createTask(title,description);
        setTitle('');
        setDescrption('');
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSumit} className='bg-slate-800 p-10 mb-4'>
                <h1 className='text-2xl font-bold text-white mb-3'>Create your task</h1>
                <input 
                    placeholder='write your task'
                    onChange={(e) => {setTitle(e.target.value)}}
                    value={title}
                    className='bg-slate-300 p-3 w-full mb-2'
                    autoFocus
                />
                <textarea 
                    placeholder='Write description of task'
                    onChange={(e)=>{setDescrption(e.target.value)}}
                    value={description}
                    className='bg-slate-300 p-3 w-full mb-2'
                ></textarea>
                <button
                    className='bg-indigo-500 px-3 py-1 text-white'>
                    Save</button>
            </form>
        </div>
    )
}

export default TaskForm