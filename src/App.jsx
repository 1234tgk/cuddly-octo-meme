import "./App.css";

const App = () => {
  const name = "John Doe";
  const birthYear = 2000;
  const thisYear = 2023;
  const element = (
    <div>
      Hello, {name}! You are {thisYear - birthYear}.
    </div>
  );

  return (
    <div>
      {/* header */}
      <header className="header">
        <nav>
          <a href="https://github.com/1234tgk">
            <img
              alt="GitHub Icon"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
              className="icon"
            />
          </a>
        </nav>

        <div className="name">
          <p>John Doe</p>
        </div>
      </header>

      {/* main */}
      <div className="main">
        <div className="todo">
          <h3 className="todo-header">To-Do List 1</h3>
          <ul className="todo-list">
            <li>Do laundry</li>
            <li>Clean the kitchen</li>
            <li>Wash them dishes</li>
          </ul>
        </div>

        <div className="todo">
          <h3 className="todo-header">To-Do List 2</h3>
          <ul className="todo-list">
            <li>Do laundry</li>
            <li>Clean the kitchen</li>
            <li>Wash them dishes</li>
          </ul>
        </div>

        {element}
      </div>
    </div>
  );
};

export default App;
