import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./logout.scss";
const Logout = () => {
  localStorage.clear(); /* Clear the data from local storage*/

  return (
    <React.Fragment>
      <div className="logout">
        <div className="text">
          YOU ARE LOGOUT NOW!
          <div className="buttons">
            <Button type="primary" style={{ margin: "1rem", width: "100px" }}>
              <Link to="/login">Login</Link>
            </Button>

            <Button type="primary" style={{ margin: "1rem", width: "100px" }}>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Logout;
