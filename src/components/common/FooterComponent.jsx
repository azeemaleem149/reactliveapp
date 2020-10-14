import React from 'react';
import { Layout } from 'antd';
// import './footerComponent.scss';

const {  Footer } = Layout;


const FooterComponent = () => {
    return ( 
        <div>
            <Layout className="layout">
                <div className='footerHead'>
                 <Footer style={{ textAlign: 'center',position:'fixed', width:'100%',zIndex:'100'}} className='footerComp'>©2020 Developed by Azeem Aleem</Footer>
                 </div>
             </Layout>
        </div>
     );
}
 
export default FooterComponent;