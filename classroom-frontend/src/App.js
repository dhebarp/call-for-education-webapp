import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { TeacherDashboard } from "./components/TeacherDashboard";
import { StudentDashboard } from "./components/StudentDashboard";
import { CreateRoomPage } from "./components/CreateRoomPage";
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/create"} component={CreateRoomPage} />
        <Route exact path={"/teacherview"} component={TeacherDashboard} />
        <Route exact path={"/studentview"} component={StudentDashboard} />
      </Switch>
    </div>
  );
}

export default App;
