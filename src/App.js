import React from 'react';
import Login from './components/login/login'
import {ToastContainer} from 'react-toastify';
import Register from './components/register/register';
import Navbar from "./components/common/navbar";
import {Switch,Route,Redirect} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout/logout";
import ProtectedRoutes from './components/HOC/protectedRoutes';

const App = () => {
  return ( 
    <React.Fragment>
       <ToastContainer/>
      <Switch>
        <ProtectedRoutes path='/' component={Navbar} exact={true}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Redirect from='/' exact to="/navbar"/>
      </Switch> 
    </React.Fragment> );
}
 
export default App;



    


