import React, {useState} from 'react'

const UpdateTodoForm = ({taskName, updateTask, task}) => {
    const [value, setValue] = useState(taskName)
    const handleSubmit=(e)=>{
       e.preventDefault()
       console.log(value);
       updateTask(value, task.id)
       setValue("")
   
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} className='text-black' />
        <button type='submit' >Update</button>
    </form>
    </div>
  )
}

export default UpdateTodoForm