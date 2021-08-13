import { register } from "../../services/users";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
    <div className="signup-form">
      <form onSubmit={handleRegister}>
        <input
          required
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          required
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
