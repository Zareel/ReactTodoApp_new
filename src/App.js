import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import TodoForm from "./components/TodoForm";
import UpdateTodoForm from "./components/UpdateTodoForm";

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
    if (!newTask) {
      alert("Enter a task");
    } else {
      let num =
        todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
      let newEntry = { id: num, taskName: newTask, status: false };
      setTodoList([...todoList, newEntry]);
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
  // is complete
  const isComplete = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, status: true };
        } else {
          return item;
        }
      })
    );
  };
// editTask
const editTask = (id) => {
  setTodoList(
    todoList.map((item) =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    )
  );
};

// update Task
const updateTask = (modifiedTaskName, id, e) => {
  setTodoList(
    todoList.map((item) =>
      item.id === id
        ? { ...item, taskName: modifiedTaskName, isEditing: !item.isEditing }
        : item
    )
  );
};

  return (
    <div className="bg-stone-900 text-stone-400 min-h-screen">
    <h1 className="text-center text-4xl font-semibold py-4">TodoApp</h1>
    <TodoForm value={newTask} setValue={setNewTask} handleSubmit={addTask} />
    <div className="flex justify-center mt-10">
      <div className="flex flex-col items-start gap-6">
        {todoList &&
          todoList.map((item) => {
            return item.isEditing ? (
              <UpdateTodoForm
                id={item.id}
                taskName={item.taskName}
                task={item}
                editTask={editTask}
                updateTask={updateTask}
              />
            ) : (
              <ToDo
                item={item}
                isComplete={isComplete}
                done={item.status}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            );
          })}
      </div>
    </div>
  </div>
  
  );
}
export default App;
