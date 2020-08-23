import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Counter from "./Counter";
import Todos from "./Todos";
import ShoppingTodos from "./ShoppingTodos";


const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Counter} /> {/* </Route> */}
          <Route path="/todos" component={Todos} /> {/* </Route> */}
          <Route path="/shopping" component={ShoppingTodos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
