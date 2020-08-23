import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
import Navbar from "./navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;