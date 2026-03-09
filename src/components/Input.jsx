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
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Task' 
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <button disabled={!input.trim()} type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Input;