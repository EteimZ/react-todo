import TodoBody from "../TodoBody/TodoBody";
import "./TodoForm.css";

function TodoForm({ handleDisp, filterText, onFilterTextChange }) {
  return (
    <div className="form-div">
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="form-input"
        placeholder="Search Todos"
      />
      <button className="form-btn" onClick={handleDisp}>
        {" "}
        Add Todo
      </button>
    </div>
  );
}

export default TodoForm;
