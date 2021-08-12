import { Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import PlayerDetails from "../screens/PlayerDetails/PlayerDetails";
import Players from "../screens/Players/Players";
const Main = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/players">
        <Players />
      </Route>
      <Route exact path="/players/:id">
        <PlayerDetails />
      </Route>
      <Route exact path="/players/:id/edit">
        <h2>edit</h2>
      </Route>
    </>
  );
};

export default Main;
