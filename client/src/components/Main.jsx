import { Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import Players from "../screens/Players/Players";
const Main = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/players">
        <Players />
      </Route>
    </>
  );
};

export default Main;
