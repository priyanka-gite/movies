import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1> This is NavBar </h1>
      <Link to={"/"}> Home </Link>;<Link to="/Aboutus"> About this website </Link>;<Link to="/Discovermoviespage"> About this website </Link>;
    </div>
  );
};

export default NavBar;
