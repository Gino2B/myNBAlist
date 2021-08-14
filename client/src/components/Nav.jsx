import { NavLink } from "react-router-dom";
import "./Nav.css";

const authenticatedOptions = (
  <>
    <NavLink className="sign-out" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/sign-up">Sign Up</NavLink>
  </>
);
function Nav({ user }) {
  return (
    <nav>
      <NavLink className="logo" to="/">
        <img
          className="logopicture"
          src="https://i.imgur.com/r8ZdsaU.png"
          alt="curry logo"
        />
        <span className="my">my</span>
        <span className="nba">NBA</span>
        <span className="shot">shot</span>
      </NavLink>
      <div className="links">
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/add">Add Players</NavLink>
        <NavLink to={user ? `/users/${user.id}` : "/sign-up"}>
          My Profile
        </NavLink>
      </div>
      <div className="user-links-container">
        {user ? (
          <div className="user-links">
            <span className="user">{user.name}</span> {authenticatedOptions}
          </div>
        ) : (
          <div className="user-links">{unauthenticatedOptions}</div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
