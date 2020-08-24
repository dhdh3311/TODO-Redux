import React from "react";
import Navbar from "./navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
import Shopping from "./Shopping";


const App = () => {
  return (
    <Router>
      <div>
        {/*<Navbar />*/}
        <nav>
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/shopping">Shopping Todos</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/shopping">
            <Shopping />
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