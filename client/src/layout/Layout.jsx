import Nav from "../components/Nav";

const Layout = (props) => (
  <div className="layout">
    <Nav />
    <div className="layout-children">{props.children}</div>
  </div>
);

export default Layout;
