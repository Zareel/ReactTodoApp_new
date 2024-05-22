import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";

const localData = () => {
  let list = localStorage.getItem("data");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function App() {
  const [todoList, setTodoList] = useState(localData());
  const [newTask, setNewTask] = useState("");
  //* add
  const addTask = (e) => {
    e.preventDefault();
   if(!newTask){
    alert("please enter your task")
   }else{
    let task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    setNewTask("");
   }
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todoList));
  }, [todoList]);

  
  //* delete
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newTodoList);
  };

  //*isComplete
  const isComplete = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: true };
        } else {
          return item;
        }
      })
    );
  };
  //* change task

  const editTask = (id) => {
    let changeTask = todoList.find((item) => {
      return item.id === id;
    });
    let newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setNewTask(changeTask.taskName);
    setTodoList(newTodoList);
  };

  return (
    <div className="bg-[#111111] text-gray-300 min-h-screen flex flex-col  gap-6 pt-24 items-center ">
      <form className="flex gap-6">
        <input
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          type="text"
          placeholder="enter your task"
          className="bg-gray-700 text-white px-4 py-2 w-[350px] rounded-md border-none outline-none"
          required
        />
        <button
          onClick={addTask}
          className="px-6 py-2 bg-purple-700 hover:bg-purple-800 active:bg-purple-500 rounded-md"
        >
          Add
        </button>
      </form>
      <div className="w-[450px]">
        {todoList &&
          todoList.map((item, index) => {
            return (
              <ToDo
                key={item.id}
                deleteTask={deleteTask}
                item={item.taskName}
                id={item.id}
                index={index}
                completed={item.completed}
                isComplete={isComplete}
                editTask={editTask}
              />
            );
          })}
      </div>
    </div>
  );
}
export default App;
