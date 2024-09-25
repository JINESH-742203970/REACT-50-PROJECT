import { useState } from "react";
const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({
    id: '',
    content: '',
    checked: false,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault(""); 
    onAddTodo(inputValue);
    setInputValue({
      id: '',
      content: '',
      checked: false,
    }); 
  };
 const handleInputChange=(value)=>{
    setInputValue({id:value,content:value,checked:false});
    
 }
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div className="flex">
          <input
            type="text"
            className="todo-input"
            value={inputValue.content}
            autoComplete="off"
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
export default TodoForm;
