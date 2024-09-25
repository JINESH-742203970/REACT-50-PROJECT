import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const TodoList = ({
  key,
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li key={key}>
      <span className={checked ? "checked" : "non-checked"}>{data}</span>
      <input type="text"/>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
export default TodoList;
