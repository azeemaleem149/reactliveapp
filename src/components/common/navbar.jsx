import React from 'react';
import { Layout, Menu, Breadcrumb,Modal } from 'antd';
import TableComponent from './tableComponent';
import {Link} from "react-router-dom"
import "./navbar.scss"


const { Header, Content, Footer } = Layout;

// Component Start from here 
const Navbar = () => {


const error=()=> {
    Modal.error({
      title: 'Please Logout Before Access this Page',
      content: "You can't access this page before Logout",
    });
  }

  let values=localStorage.getItem('values');
  let mName1=JSON.parse(values);

    return ( 
    <div>
  <Layout className="layout">

    {/* Header Area start from here  */}
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    <Menu.Item key="1" style={{color:'white',fontWeight:'700', fontSize:'20px'}}>{mName1.nickname}</Menu.Item>
      <Menu.Item key="2"><Link to="./">Home</Link></Menu.Item>
      <Menu.Item key="3" onClick={error}> Login</Menu.Item>
      <Menu.Item key="4" onClick={error}>Register</Menu.Item>
      <Menu.Item key="5"><Link to="./logout">Logout</Link></Menu.Item>

      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    <div className="site-layout-content">
    <TableComponent/>
    

    </div>
    </Content>
    {/* Footer Area   */}
    <Footer style={{ textAlign: 'center' }}>©2020 Developed by {mName1.nickname}</Footer>
  </Layout>
    </div>
     );
}
 
export default Navbar;

// Componend End here 