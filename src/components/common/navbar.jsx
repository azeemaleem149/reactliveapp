import React from 'react';
import { Layout, Menu} from 'antd';
import {Link} from "react-router-dom"
import "./navbar.scss"

const { Header } = Layout;
// Component Start from here 
const Navbar = (props) => {

  let values=localStorage.getItem('values');
  let mName1=JSON.parse(values);

    return ( 
    <div>
  <Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.value]}>
          <Menu.Item key="1" style={{color:'white',fontWeight:'700', fontSize:'20px',marginRight:'65%'}}><Link to="./">{mName1.nickname}</Link></Menu.Item>
          <Menu.Item key="2"><Link to="./">Home</Link></Menu.Item>
          <Menu.Item key="3"><Link to="./userdetail">User Detail</Link></Menu.Item>
          <Menu.Item key="4"><Link to="./logout">Logout</Link></Menu.Item>
      </Menu>
      
    </Header>
  </Layout>
    </div>
     );
}
 
export default Navbar;

// Componend End here 