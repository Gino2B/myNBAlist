import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink>Sign Out</NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink>Login</NavLink>
    <NavLink>Sign Up</NavLink>
  </>
);
function Nav() {
  return (
    <nav>
      <NavLink className="logo" to="/">
        <span>my</span>
        <span>NBA</span>
        <span>shot</span>
      </NavLink>
      <div>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/add">Add Players</NavLink>
        <NavLink to="/user/:id">My Profile</NavLink>
      </div>
      <div></div>
    </nav>
  );
}

export default Nav;
