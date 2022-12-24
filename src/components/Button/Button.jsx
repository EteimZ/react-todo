import "./Button.css";

function Button({ name, classname, click }) {
  return (
    <button className={classname} onClick={click}>
      {name}
    </button>
  );
}

export default Button;
