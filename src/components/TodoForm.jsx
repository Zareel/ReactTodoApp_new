import React from 'react'

const TodoForm = ({ value, setValue, handleSubmit }) => {
  return (
    <div className="flex justify-center">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the task here..."
        className="bg-stone-700 w-[400px] px-2 py-2 rounded-md mt-10 border-none outline-none"
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
      />
      <button type="submit" className="bg-stone-700 ml-4 py-2 px-4 rounded-md">
        Submit
      </button>
    </form>
  </div>
  )
}

export default TodoForm