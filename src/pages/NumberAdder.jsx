import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./App.css";

const NumberAdder = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    if (isNaN(number1)) {
      setNumber1(0);
    }

    if (isNaN(number2)) {
      setNumber2(0);
    }
  }, [number1, number2]);

  return (
    <div>
      <Header name="John Doe" />

      <div className="main">
        <form>
          <input
            value={number1}
            onChange={(e) => setNumber1(Number(e.target.value))}
          />
          <input
            value={number2}
            onChange={(e) => setNumber2(Number(e.target.value))}
          />
        </form>

        <p>Sum of two number: {number1 + number2}</p>
      </div>
    </div>
  );
};

export default NumberAdder;
