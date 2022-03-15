import "./register.css";
import Button from "../../components/button/Button"

const Register = () => {
  return (
    <div className="container1">
      <div className="container">
        <h1>Register</h1>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button text="Register" />
      </div>
    </div>
  );
};

export default Register;
