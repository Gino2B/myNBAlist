import Nav from "../components/Nav";
import "./Layout.css";
const Layout = (props) => (
  <div className="layout">
    <Nav user={props.user} />
    <div className="layout-children">{props.children}</div>
  </div>
);

export default Layout;
