import { NavLink } from "react-router-dom";

// const authenticatedOptions = (
//   <>
//     <NavLink to="/sign-out">Sign Out</NavLink>
//   </>
// );
// const unauthenticatedOptions = (
//   <>
//     <NavLink to="/login">Login</NavLink>
//     <NavLink to="/sign-up">Sign Up</NavLink>
//   </>
// );
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
        <NavLink to="/user/">My Profile</NavLink>
      </div>
      <div></div>
    </nav>
  );
}

export default Nav;
