import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link exact to="/count">
              카운트
            </Link>
          </li>
          <li>
            <Link exact to="/todos">
              todos
            </Link>
          </li>
        </ul>
      </Router>
    </div>
  );
};

export default Navbar;
