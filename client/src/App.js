import "./App.css";
import Main from "./components/Main";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { login, register, verify, logout } from "./services/users";

function App() {
  const [user, setUser] = useState(null);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const reverify = async () => {
      const currentUser = await verify();
      user ? setUser(currentUser) : setUser(null);
    };
    reverify();
  }, []);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const user = await login(loginFormData);
  //   setUser(user);
  //   history.push("/foods");
  // };

  // const handleLogout = () => {
  //   logout();
  //   setUser(null);
  //   history.push("/login");
  // };

  return (
    <div className="App">
      <Layout user={user}>
        <Main user={user} setUser={setUser} />
      </Layout>
    </div>
  );
}

export default App;
