import { NavLink } from "react-router-dom";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
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
    <NavLink className="login" to="/login">
      Login
    </NavLink>
    <NavLink className="sign-up" to="/sign-up">
      Sign Up
    </NavLink>
  </>
);
function Nav({ user }) {
  // whether or not the menu should be visible PERIOD
  // this will always be true when using desktop breakpoints
  const [visible, setVisible] = useState(true);
  // is the hamburger menu open?
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // if we're at desktop size
      if (window.innerWidth > 768) {
        // make the nav visible
        setVisible(true);
        // untoggle the hamburger menu
        setHamburger(false);
      } else {
        // otherwise...
        // make the nav invisible
        setVisible(false);
      }
    };
    // add an event listener to the resize event on the window
    window.addEventListener("resize", handleResize);
    // unmounts we'll remove that event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
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
        <FontAwesomeIcon
          icon={faAlignJustify}
          onClick={() => setHamburger(!hamburger)}
        />
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
      <div className="hamburger-container">
        <div
          className="hamburger-links"
          style={{ display: visible || hamburger ? "flex" : "none" }}
        >
          <NavLink to="/players">Players</NavLink>
          <NavLink to="/add">Add Players</NavLink>
          <NavLink to={user ? `/users/${user.id}` : "/sign-up"}>
            My Profile
          </NavLink>
        </div>
        <div
          className="hamburger-user-links-container"
          style={{ display: visible || hamburger ? "flex" : "none" }}
        >
          {user ? (
            <div className="hamburger-user-links">
              <span className="user">{user.name}</span> {authenticatedOptions}
            </div>
          ) : (
            <div className="hamburger-user-links">{unauthenticatedOptions}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
