import React from 'react';
import MyProvider from './myProvider';
import Login from './components/login/login'
import {ToastContainer} from 'react-toastify';
import Register from './components/register/register';
import Home from './components/Home/home';
import {Switch,Route,Redirect} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout/logout";
import ProtectedRoutes from './components/HOC/protectedRoutes';
import UserDetail from './components/user detail/userDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => {
  return ( 
    <>
    <MyProvider>
       <ToastContainer/>
      <Switch>
        <ProtectedRoutes path='/' component={Home} exact={true}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/userdetail" component={UserDetail} />
        <Redirect from='/' exact to="/home"/>
      </Switch> 
    </MyProvider>
      </>
  );
}
 
export default Routes;
