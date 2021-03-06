import React from 'react';
import { Layout, Menu,Avatar,Dropdown} from 'antd';
import {Link} from "react-router-dom"
import { UserOutlined } from '@ant-design/icons';
import logo from '../images/logo.png'
import "./navbar.scss"

const { Header } = Layout;
// Component Start from here 
const Navbar = (props) => {

  // let values=localStorage.getItem('values');
  // let mName1=JSON.parse(values);
  const menu = (
    <Menu>
      <Menu.Item>
      <Link to='/userdetail'>User Detail</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/logout'>Log out</Link>
      </Menu.Item>
    </Menu>
  );
    return ( 
    <div>
  <Layout className="layout">
    <Header>
      {/* <img src='./'/> */}
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={[props.value]}>
          <Menu.Item key="2" style={{marginRight:'85%'}}><Link to="./"><img src={logo} className='logo'/></Link></Menu.Item>
          {/* <Menu.Item key="1" style={{color:'white',fontWeight:'700', fontSize:'20px',marginRight:'65%'}}><Link to="./">{mName1.nickname}</Link></Menu.Item> */}
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Avatar size="large" icon={<UserOutlined />} />
         </Dropdown>
          {/* <Menu.Item key="3"><Link to="./userdetail">User Detail</Link></Menu.Item> */}
          {/* <Menu.Item key="4"><Link to="./logout">Logout</Link></Menu.Item> */}
      </Menu>
      
    </Header>
  </Layout>
    </div>
     );
}
 
export default Navbar;

// Componend End here 