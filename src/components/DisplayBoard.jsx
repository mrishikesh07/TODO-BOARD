import React from 'react'

const DisplayBoard = ({task, onDelete}) => {
  return (
    <div>
        <p>{task.text}</p>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default DisplayBoard;