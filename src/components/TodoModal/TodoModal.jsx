import { useState } from "react";
import Button from "../Button/Button";
import "./TodoModal.css";

function TodoModal({
  display,
  handleDisp,
  handleSave,
  descr,
  setDescr,
  title,
  setTitle,
}) {
  return (
    <div className={display ? "modal disp" : "modal nodisp"}>
      <div className="modal-content">
        <input
          type="text"
          placeholder="Add todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="modal-input"
        />
        <textarea
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
          placeholder="Add todo detail"
          className="modal-descr"
        />
        <div className="modal-btns">
          <Button name="Save" classname="btn-success btn" click={handleSave} />
          <Button name="Cancel" classname="btn-danger btn" click={handleDisp} />
        </div>
      </div>
    </div>
  );
}

export default TodoModal;
