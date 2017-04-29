import React from 'react';

export default function Todo({ text, completed, handleDeleted, handleCompleted }) {
  return (
    <div>
      {text}
      <input
        type="checkbox"
        value={completed}
        onChange={handleCompleted}
      />
      <button onClick={handleDeleted}>Delete Me</button>
    </div>
  )
}