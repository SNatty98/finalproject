import "./login.css";
import Button from "../../components/button/Button"

const Login = () => {
  return (
    <div className="loginContainer1">
      <div className="loginContainer">
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button className="loginBtn" text="Login" />
      </div>
    </div>
  );
};

export default Login;
