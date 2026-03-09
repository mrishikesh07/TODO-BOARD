import React from 'react'

const DisplayBoard = ({task}) => {
  return (
    <div>
        <p>{task.text}</p>
    </div>
  )
}

export default DisplayBoard;