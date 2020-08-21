import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
import Navbar from "./navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Counter} /> {/* </Route> */}
          <Route path="/todos" component={Todos} /> {/* </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
