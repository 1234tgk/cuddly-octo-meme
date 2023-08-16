import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./App.css";

const Dog = () => {
  const [url, setUrl] = useState();

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const res = await (
        await fetch("https://dog.ceo/api/breeds/image/random")
      ).json();

      if (!ignore) {
        setUrl(res.message);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <Header name="John Doe" />

      <div className="main">
        <img style={{ width: "50vw" }} src={url} alt="Dog Image" />
      </div>
    </div>
  );
};

export default Dog;
