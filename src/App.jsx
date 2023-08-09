import Header from "./components/Header";
import Todo from "./components/Todo";
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
  const list1 = ["Do laundry", "Clean the kitchen", "Wash the dishes"];
  const list2 = ["Do Homework", "Clean my room"];

  return (
    <div>
      {/* header */}
      <Header name="John Doe" />

      {/* main */}
      <div className="main">
        <Todo title="To-do List 1" list={list1} />
        <Todo title="To-do List 2" list={list2} />
      </div>
    </div>
  );
};

export default App;
