import "./login.css";
import Button from "../../components/button/Button";
import { Context } from "../../context/Context";
import { useContext, useRef } from "react";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/");

    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="loginContainer1">
      <form className="loginContainer" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" ref={userRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <Button className="loginBtn" text="Login" type="submit" />
      </form>
    </div>
  );
}
