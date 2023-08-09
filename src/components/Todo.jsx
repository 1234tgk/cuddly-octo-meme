import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="todo">
      <h3 className="todo-header">{props.title}</h3>
      <ul className="todo-list">
        {props.list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
