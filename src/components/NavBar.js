import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/">
        Homepage
      </NavLink>
      {" -"}
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/aboutus">
        About us
      </NavLink>
      {" -"}
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/discovermoviespage">
        Discover movie page
      </NavLink>
    </div>
  );
};

export default NavBar;
