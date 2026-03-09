import React, { useState } from 'react'

const Input = () => {
    const [input, setInput] = useState("");

  return (
    <div>
        <form>
            <input
                type='text'
                placeholder='Task' 
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <button>Add</button>
        </form>
    </div>
  )
}

export default Input;