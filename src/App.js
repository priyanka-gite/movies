// import logo from "./logo.svg";
import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Discovermoviespage from "./pages/Discovermoviespage";
import NavBar from "./components/NavBar";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/"} component={Homepage} />
        <Route path={"/aboutus"} component={Aboutus} />
        <Route path={"/discovermoviespage"} component={Discovermoviespage} />
      </Switch>
    </div>
  );
}

export default App;
