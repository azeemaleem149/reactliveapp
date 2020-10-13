import React,{useState,useEffect} from 'react';
import {Button,Modal} from 'antd';
import { Table } from 'react-bootstrap';
import './userTask.scss';
import TaskInputForm from './taskInputForm';

const UserTask = () => {


  useEffect(() => {
    const item=window.localStorage.getItem('previousData');
    const item1=JSON.parse(item);
    if(item1){
      setData1(item1);
    }

  },[])  
  const [visible,setVisible]=useState(false);
    const [data1,setData1]=useState([]);
 
    
    const showModal = () => {
        setVisible(true);
      };
    const handleCancel = () => {
        setVisible(false);
      };
      const handler=()=>{
          setVisible(false);

      }
      const getData=(data)=>{
      let tryValue=data1.slice();
      tryValue.push(data);
      setData1(tryValue);
      
      }
    return ( 
        <div>
            <div className='addTaskButton'>
            <Button type="primary" onClick={showModal}>+ Add Task</Button>
            </div>
            <Modal
                title="Put Your Task"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
                >
                <TaskInputForm action={handler} sendData={getData}/>
            </Modal>
            {/* <Table columns={columns} dataSource={data1} size="small" /> */}
            <Table striped bordered hover>
                <thead>
                  <tr>
                   
                    <th>Heading of Task</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  
                        {data1.map(function(name,key){
                        return (<tr key={key}>
                        <td>{name?.heading}</td>
                        <td>{name?.date.toString()}</td>
                        <td>{name?.status}</td>

                        </tr>);
                      })}
                </tbody>
              </Table>
        </div>
     );
}
 
export default UserTask;