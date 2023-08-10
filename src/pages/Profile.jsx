import Header from "../components/Header";
import "./App.css";

const Profile = () => {
  return (
    <div>
      <Header name="John Doe" />

      <div className="main">
        <h2>John Doe</h2>

        <p>
          Email: <strong>johndoe@stemingup.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Profile;
