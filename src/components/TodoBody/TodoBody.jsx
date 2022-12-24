import TodoItem from "../TodoItem/TodoItem";

function TodoBody({
  todos,
  handleCheck,
  handleRemove,
  handleDetail,
  filterText,
}) {
  const data = todos.map((todo) => {
    if (todo.title.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
      return;
    }

    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        status={todo.status}
        handleCheck={handleCheck}
        handleRemove={handleRemove}
        handleDetail={handleDetail}
      />
    );
  });

  return (
    <div>
      <ul> {data} </ul>
    </div>
  );
}

export default TodoBody;
