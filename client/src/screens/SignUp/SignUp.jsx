import { register } from "../../services/users";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import "./SignUp.css";
const SignUp = (props) => {
  const history = useHistory();
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
    image_url:
      "https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const newUser = await register(registerFormData);
      setUser(newUser);
      history.push("/");
    } catch (error) {
      setRegisterFormData({
        email: "",
        password: "",
        passwordConfirm: "",
        isError: true,
        errorMsg: "Details Invalid",
      });
    }
  };
  const renderError = () => {
    const toggleForm = registerFormData.isError ? "danger" : "";
    if (registerFormData.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {registerFormData.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };
  const { name, email, password, password_Confirm } = registerFormData;

  return (
    <div>
      <div className="signup"> Sign Up</div>
      <form onSubmit={handleRegister} className="signup-form">
        <div className="route-login">
          Already have an account? Proceed to &nbsp;
          <Link to="/login" className="route-to-login">
            login!
          </Link>
        </div>
        <input
          required
          className="signup-name"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          required
          className="signup-input"
          type="text"
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          required
          className="signup-input"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          required
          className="signup-password"
          type="password"
          name="password_Confirm"
          value={password_Confirm}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {/* <button>Sign Up</button> */}
        {renderError()}
      </form>
    </div>
  );
};

export default SignUp;
