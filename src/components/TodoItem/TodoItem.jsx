import Button from "../Button/Button";
import "./TodoItem.css";

function TodoItem({
  id,
  title,
  status,
  handleCheck,
  handleRemove,
  handleDetail,
}) {
  return (
    <li className="item-list">
      <input
        type="checkbox"
        className="item-check"
        checked={status}
        onChange={(e) => handleCheck(id)}
      />{" "}
      {!status ? (
        <span className="item-title">{title}</span>
      ) : (
        <span className="item-title">
          <del>{title}</del>
        </span>
      )}{" "}
      <span className="item-btns">
        <Button
          name="detail"
          classname="btn btn-success"
          click={(e) => handleDetail(id)}
        />
        <Button
          name="remove"
          classname="btn btn-danger"
          click={(e) => handleRemove(id)}
        />
      </span>
    </li>
  );
}

export default TodoItem;
