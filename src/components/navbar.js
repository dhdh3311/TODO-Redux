import React from "react";
import Link from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Menu>
        <Menu.Item>
          <Link to="/">
            <a>
              <Button>카운터</Button>
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/todos">
            <a>
              <Button>Todo</Button>
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
