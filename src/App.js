import React from "react";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import Meals from "./Routes/Meals";
import SignIn from "./Routes/SignIn";
import { Switch, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="row">
        <header className="header">
          <h1> Diet Diary </h1>
        </header>{" "}
      </div>
      <Switch>
        <PrivateRoute path="/meals">
          <Meals />
        </PrivateRoute>{" "}
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
      <div class="row">
        <footer class="footer">
          <h2 style={{ textAlign: "left" }}> Furkan Keskin </h2>
        </footer>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
