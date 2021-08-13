import "./App.css";
import Main from "./components/Main";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";
import { verify } from "./services/users";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const reverify = async () => {
      const currentUser = await verify();
      currentUser ? setUser(currentUser) : setUser(null);
    };
    reverify();
  }, []);

  return (
    <div className="App">
      <Layout user={user}>
        <Main user={user} setUser={setUser} />
      </Layout>
    </div>
  );
}

export default App;
