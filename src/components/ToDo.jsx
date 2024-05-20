import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from "@mui/icons-material/Edit";

const ToDo = ({deleteTask, item, id, index, completed, isComplete, editTask}) => {
  return (
    <div className="flex justify-between items-center  gap-10">
    <h1 className={`flex gap-4 text-3xl cursor-pointer ${completed ? "line-through text-green-500" : "text-gray-500 hover:text-gray-300"}`}><span className='text-gray-500'>{index + 1}</span>{item}</h1>
   <div className='flex gap-4'>
   <DoneIcon onClick={() => {isComplete(id)}} className='text-green-500 hover:text-green-200 cursor-pointer'/>
   <EditIcon onClick={() => {editTask(id)}} className='text-yellow-500 hover:text-yellow-200 cursor-pointer'/>
   <DeleteIcon onClick={() => {deleteTask(id)}} className='text-red-500 hover:text-red-300 cursor-pointer'/>
   
   </div>
    </div>
  )
}

export default ToDo