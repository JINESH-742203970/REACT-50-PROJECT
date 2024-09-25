import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import{getLocalStorageData,setLocalStorageData} from "./TodoLocalStorage";

const todosKey="reactTodo";
const TODO = () => {
//   const [task, setTask] = useState(()=>{
//      getLocalStorageData();
// });
const[task,setTask]=useState([]);
  console.log(task);
  const rawTodos=localStorage.getItem(todosKey);

  console.log(rawTodos);
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;

    // setTask((prevTask) => [...prevTask, { id, content, checked }]);
   setTask((prevTasks)=>[inputValue,...prevTasks])
  };
 setLocalStorageData(task);
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  const handleCheckedTodo = (todoContent) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === todoContent) {
        return { ...currTask, checked: !currTask.checked };
      }
      return currTask;
    });
    setTask(updatedTask); // Update the state with the new array
  };

  const handleClearData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((currTask) => (
            <TodoList
              key={currTask.id}
              data={currTask.content}
              checked={currTask.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>
      <button className="clear-btn" onClick={handleClearData}>
        Clear All
      </button>
    </section>
  );
};

export default TODO;
