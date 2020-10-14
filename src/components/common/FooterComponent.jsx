import React from 'react';
import { Layout } from 'antd';

const {  Footer } = Layout;


const FooterComponent = () => {
    return ( 
        <div>
            <Layout className="layout">
                
                 <Footer style={{ textAlign: 'center',position:'fixed', width:'100%',zIndex:'100'}}>©2020 Developed by Azeem Aleem</Footer>
             
             </Layout>
        </div>
     );
}
 
export default FooterComponent;