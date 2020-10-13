import React from 'react';
import { Layout } from 'antd';

const {  Footer } = Layout;


const FooterComponent = () => {
    return ( 
        <div>
            <Layout className="layout">
                 <Footer style={{ textAlign: 'center' }}>©2020 Developed by Azeem Aleem</Footer>
             </Layout>
        </div>
     );
}
 
export default FooterComponent;