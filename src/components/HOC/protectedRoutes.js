import React, { Component } from "react";
import Helper from "../../helper";
import { Redirect } from "react-router-dom";

// Higher Order Component
class ProtectedRoutes extends Component {
  state = {};
  render() {
    const Component1 = this.props.component;
    const user = Helper(3);

    // Transform the component and return back
    return user ? <Component1 /> : <Redirect to={{ pathname: "/register" }} />;
  }
}

export default ProtectedRoutes;

//  End here--
