import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoBody from "./components/TodoBody/TodoBody";
import TodoModal from "./components/TodoModal/TodoModal";
import "./App.css";

function App() {
  const [filterText, setFilterText] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Finish Todo",
      descr: "This is a decription.",
      status: true,
    },
    {
      id: 2,
      title: "Start Todo",
      descr: "This is the second description.",
      status: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");

  const [disp, setDisp] = useState(false);

  function handleSave() {
    if (title !== "") {
      addTodo(title, descr);
      handleDisp();
      setTitle("");
      setDescr("");
    }
  }

  function handleDisp() {
    setDisp((x) => (x ? false : true));
  }

  function addTodo(title, descr) {
    let id = uuidv4();
    setTodo([...todo, { id: id, title, descr, status: false }]);
  }

  function handleCheck(index) {
    const newTodos = todo.map((x, i) => {
      if (i + 1 == index) {
        return { ...x, status: !x.status };
      } else {
        return x;
      }
    });
    setTodo(newTodos);
  }

  function handleRemove(index) {
    const newTodos = todo.filter((x) => x.id !== index);
    setTodo(newTodos);
  }

  function handleDetail(index) {
    const detail = todo.filter((x) => x.id == index);
    console.log(detail);
    setTitle(detail[0].title);
    setDescr(detail[0].descr);
    handleDisp();
  }

  return (
    <div className="center">
      <TodoForm
        handleDisp={handleDisp}
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <TodoBody
        todos={todo}
        filterText={filterText}
        handleCheck={handleCheck}
        handleRemove={handleRemove}
        handleDetail={handleDetail}
      />
      <TodoModal
        display={disp}
        handleDisp={handleDisp}
        handleSave={handleSave}
        descr={descr}
        title={title}
        setDescr={setDescr}
        setTitle={setTitle}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
