import React from 'react';
import {Link} from "react-router-dom";
import {
    Form, 
    Input,
    Tooltip,
    Select,
    Button,
  } from 'antd';
  import { QuestionCircleOutlined } from '@ant-design/icons';
  import "./register.scss";


  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

// Registration page start from here 


const Register = (props) => {
    const [form] = Form.useForm();


    // Putting all data on Local storage 
    const onFinish = values => {
      localStorage.setItem("values",JSON.stringify(values));
      localStorage.setItem('auhenticate',"");
      props.history.push('./login');
    };
  
    const prefixSelector = (
        
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+92</Option>
          <Option value="87">+91</Option>
        </Select>
      </Form.Item>
    );
  
    return ( 
    <div id="myForm">
    
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >

    <Form.Item
        name="nickname"
        label={
          <span>
            Name&nbsp;
            <Tooltip title="Your Origional Name">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[{ required: true, message: 'Please input your Name!', whitespace: true }]}
      >
    <Input/>
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
    <Input/>
    </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      > 
        <Input.Password />
      </Form.Item>
     

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        
        {...tailFormItemLayout}
      >
       
          Do you have already Account! <Link to="./login">Login</Link>
       
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div> );
}
 
export default Register;