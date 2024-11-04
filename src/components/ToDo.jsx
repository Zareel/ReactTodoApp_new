import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from "@mui/icons-material/Edit";

const ToDo = ({item, deleteTask,done, isComplete, editTask}) => {
  return (
    <div className="flex gap-4">
    <span>{item.id}</span>
    <span className={`${done ? "line-through text-green-600" : "text-stone-200"}`}>{item.taskName}</span>
    <div>
    <DoneIcon onClick={() => {isComplete(item.id)}} className='cursor-pointer'/>
    <EditIcon onClick={() => {editTask(item.id)}}/>
    <DeleteIcon onClick={() => {deleteTask(item.id)}}/>
    </div>
  </div>
  )
}

export default ToDo