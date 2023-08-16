import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./App.css";

const Profile = () => {
  const [setup, setSetup] = useState();
  const [punchline, setPunchline] = useState();

  useEffect(() => {
    // create flag called "ignore"
    // this will tell the effect whether to run the state updater or not
    let ignore = false;

    const fetchData = async () => {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const responseJson = await response.json();

      if (!ignore) {
        setSetup(responseJson.setup);
        setPunchline(responseJson.punchline);
      }
    };

    fetchData();

    // clean up by setting ignore to true
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <Header name="John Doe" />

      <div className="main">
        <h2>John Doe</h2>

        <p>
          Email: <strong>johndoe@stemingup.com</strong>
        </p>
        <p>{setup}</p>
        <p>{punchline}</p>
      </div>
    </div>
  );
};

export default Profile;
