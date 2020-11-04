import React, { Component } from "react";
import { Helper1 } from "../../helper";
import { Redirect } from "react-router-dom";

// Higher Order Component
class ProtectedRoutes extends Component {
  state = {};
  render() {
    const Component1 = this.props.component;
    const user = Helper1();
    return user ? <Component1 /> : <Redirect to={{ pathname: "/register" }} />;
  }
}

export default ProtectedRoutes;

//  End here--
