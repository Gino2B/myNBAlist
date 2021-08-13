import { Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import PlayerDetails from "../screens/PlayerDetails/PlayerDetails";
import PlayerEdit from "../screens/PlayerEdit/PlayerEdit";
import PlayerAdd from "../screens/PlayerAdd/PlayerAdd";
import Players from "../screens/Players/Players";
import SignUp from "../screens/SignUp/SignUp";

const Main = (props) => {
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
        <PlayerEdit />
      </Route>
      <Route exact path="/add">
        <PlayerAdd />
      </Route>
      <Route exact path="/login">
        <SignUp setUser={props.setUser} user={props.user} />
      </Route>
    </>
  );
};

export default Main;
