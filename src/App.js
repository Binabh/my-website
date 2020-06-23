import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./views/Landing";
import "./assets/css/style.css";
import NavBar from "./components/common/Navbar";
import NotFound from "./views/PageNotFound";
import Contact from "./views/Contact";
import Blogs from "./views/Blogs";
import Works from "./views/Works";

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={Landing}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/blogs"}
            component={Blogs}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/works"}
            component={Works}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            component={Contact}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
