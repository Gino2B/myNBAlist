import { Route } from "react-router-dom";
import Home from "../screens/Home/Home";
const Main = () => {
  return (
    <Route exact path="/">
      <Home />
    </Route>
  );
};

export default Main;
