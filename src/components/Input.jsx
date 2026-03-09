import React, { useState } from 'react'

const Input = ({onAdd}) => {
    const [input, setInput] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!input.trim()) return;
        onAdd(input);
        setInput("");
    }
  return (
    <>
        <form className='flex flex-row items-center  gap-3' onSubmit={handleSubmit}>
            <input
                className='border rounded-lg py-1.5 px-2.5 text-lg'
                type='text'
                placeholder='Add a task' 
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <button 
                className='bg-violet-400 text-white py-2 px-3.5 
                rounded-lg font-semibold hover:opacity-70 disabled:cursor-not-allowed'
                disabled={!input.trim()} type='submit'>Add</button>
        </form>
    </>
  )
}

export default Input;