import React from 'react';

export default function Todo({ text, completed, handleDeleted }) {
  return (
    <div>
      {text}
      <input
        type="checkbox"
        value={completed}
      />
      <button onClick={handleDeleted}>Delete Me</button>
    </div>
  )
}