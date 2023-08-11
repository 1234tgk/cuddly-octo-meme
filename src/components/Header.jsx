import { Link } from "react-router-dom";
import Clock from "./Clock";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <nav>
          <a href="https://github.com/1234tgk">
            <img
              alt="GitHub Icon"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
              className="icon"
            />
          </a>
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              alt="Home"
              className="icon"
            />
          </Link>
        </nav>

        <Link className="name" to="/profile">
          <p>{props.name}</p>
        </Link>
      </header>

      <Clock />
    </div>
  );
};

export default Header;
