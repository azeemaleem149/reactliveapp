import React,{useContext,useEffect} from 'react';
import secretContext from "../../myContext";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {toast} from 'react-toastify';
import {Link} from "react-router-dom"
import "./login.scss";

// React Toastify Error 
const error=()=>{
  toast.error ("Please Correct your Information");
}
const success=(name)=>{
  toast.info (`Welcome ${name} !`);
}

// Login Component Start from here 
const Login = (props) => {

  const credentials=useContext(secretContext);
  
  useEffect(()=>{
console.log('i am useEffect',credentials);
  },[credentials]);

  console.log('i am credentials',credentials);

  const onFinish = (values) => {
    // let entry=localStorage.getItem('values');   /*  Fetching data from local storage */
    // let entryJson=JSON.parse(entry);
    let nickname=credentials.nickname;
    let storageUsername=credentials.email;
    let storagePassword=credentials.password;

// Validate registered User 
  

      values.username===storageUsername && values.password===storagePassword ? localStorage.setItem('auhenticate',true): error();
      values.username===storageUsername && values.password===storagePassword && props.history.push('/'); success(nickname);  //two actions performs on one condition
    

    }
  return ( 
    /*  Login Form Start here*/

    <div id='loginForm'>
  <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish} >

    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]} 
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}    
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox >Remember me</Checkbox>
      </Form.Item>

      <a className="login-form-forgot" href="/">
        Forgot password
      </a>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
       Log in
      </Button>
      Or <Link to="./register">register now!</Link>
    </Form.Item>
  </Form>
      </div>
   );
}
 
export default Login;







