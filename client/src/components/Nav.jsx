import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink to="/sign-out">Sign Out</NavLink>
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
          src="https://i.pinimg.com/474x/16/42/de/1642de414b6ac496c3a3215c68972848.jpg"
          alt="curry logo"
        />
        <span>my</span>
        <span>NBA</span>
        <span>shot</span>
      </NavLink>
      <div>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/add">Add Players</NavLink>
        <NavLink to={user ? `/users/${user.id}` : "/sign-up"}>
          My Profile
        </NavLink>
      </div>
      <div>
        {user ? (
          <div>
            {user.name} {authenticatedOptions}
          </div>
        ) : (
          unauthenticatedOptions
        )}
      </div>
    </nav>
  );
}

export default Nav;
