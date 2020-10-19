import React from 'react';
import { Layout } from 'antd';
import './footerComponent.scss';
const {  Footer } = Layout;


const FooterComponent = () => {
    return ( 
        <div className='footer'>
            <p>©2020 Developed by Azeem Aleem</p>
            {/* <Layout className="layout">
                
                 <Footer style={{ textAlign: 'center',position:'fixed', width:'100%'}}>©2020 Developed by Azeem Aleem</Footer>
             
             </Layout> */}
        </div>
     );
}
 
export default FooterComponent;