import { React, Component } from "react";
import { Menu, Link, Button } from "react";

import Counter from "./Counter";
import Todos from "./Todos";
import Navbar from "./navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route exact path="/" component={Counter} />
      </div>
    );
  }
}

export default App;
