import "./register.css";
import Button from "../../components/button/Button";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      if (password === confirmPassword) {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            email,
            username,
            password,
          }
        );
        res.data && window.location.replace("/login");
      } else {
        setPassError(true);
      }
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
          required={true}
        />
        <input
          type="text"
          placeholder="Username"
          minLength={6}
          onChange={(e) => setUsername(e.target.value)}
          required={true}
        />
        <input
          type="password"
          placeholder="Password"
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          minLength={6}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required={true}
        />
        <Button text="Register" type="submit" />
        {error && <span className="Err">Something went wrong!</span>}
        {passError && (
          <span className="Err">Your passwords did not match!</span>
        )}
      </form>
    </div>
  );
};

export default Register;
