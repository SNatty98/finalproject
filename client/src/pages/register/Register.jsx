import "./register.css";
import Button from "../../components/button/Button";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        username,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="container1">
      <form className="registerContainer" onSubmit={handleSubmit}>
        <h1 className="registerHeader">Register</h1>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <input
          type="text"
          placeholder="Username"
          minLength={6}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
        />
         <input
          type="password"
          placeholder="Retype Password"
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Register" type="submit" />
        {error && (
          <span style={{ marginTop: "10px" }}>Something went wrong!</span>
        )}
      </form>
    </div>
  );
};

export default Register;
