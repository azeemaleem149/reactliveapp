import React,{useState} from 'react';
import Navbar from '../common/navbar';
import FooterComponent from '../common/FooterComponent';
import UserTask from '../userTask/userTask';
import { Layout,Breadcrumb } from 'antd';
import './home.scss'

const {Content} = Layout;


const Home = () => {
    const [value]=useState('2');
    return ( 
        <div id='home'>
        <Layout className="layout">
        <Navbar value={value}/>
        <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
         </Breadcrumb>
    <div className="site-layout-content">
    <UserTask/>

    </div>
    </Content>
    <FooterComponent/>
    </Layout>
    
        </div>
     );
}
 
export default Home;