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
      <h1>Movie App</h1>

      <NavBar />

      {/* Everything that we put outside switch shows up in every page thats why we put navbar out */}

      <Switch>
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/discovermoviespage" component={Discovermoviespage} />
        <Route path="/" component={Homepage} />
      </Switch>
      {/* <h3>Footer</h3> */}
    </div>
  );
}

export default App;
