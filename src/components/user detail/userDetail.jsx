import React,{ Component } from 'react';
import Navbar from '../common/navbar';
import FooterComponent from '../common/FooterComponent';
import TableComponent from '../common/tableComponent';
import { Layout,Breadcrumb } from 'antd';

const { Content} = Layout;

class userDetail extends Component {
    state = { 
        count:'3'
     }
    render() { 
        return ( 
            <div>
            <Layout>
                 <Navbar value={this.state.count}/>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>User Detail</Breadcrumb.Item>

                        </Breadcrumb>
                            <div className="site-layout-content">
                            <TableComponent/>

                            </div>
                    </Content>
                  <FooterComponent/>
            </Layout>
        </div>
         );
    }
}
 
export default userDetail;