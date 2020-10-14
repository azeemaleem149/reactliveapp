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
  
  // All states here 
  const [visible,setVisible]=useState(false);
  const [data1,setData1]=useState([]);
 
    // Model Box Functions 
    const showModal = () => {
        setVisible(true);
      };
    const handleCancel = () => {
        setVisible(false);
      };
      const handler=()=>{
          setVisible(false);

      }

      // Update state with new Data function 
      const getData=(data)=>{
      let tryValue=data1.slice();
      tryValue.push(data);
      setData1(tryValue);
      
      }
      // Delete Task function 
      const deleteFunction=(val)=>{
        const filteredItems = data1.filter(item => item.heading !== val)
        setData1(filteredItems);
        localStorage.setItem('previousData',JSON.stringify(filteredItems));
      }
    return ( 
        <div>
            <div className='addTaskButton'>
            <Button type="primary" onClick={showModal}>+ Add Task</Button>
            </div>
            {/* {data1.length<=0 &&
            <p style={{color:'red'}}>No Tasks Available</p>
              }
            {data1.length>0 &&<strong style={{color:'#1890FF'}}>Total Tasks={data1.length}</strong>} */}

            <Modal
                title="Put Your Task"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
                >
                <TaskInputForm action={handler} sendData={getData}/>
            </Modal>
        
        {/* Table component start */}
            <Table striped bordered hover>
                <thead>
                  <tr>
                   
                    <th>Heading of Task</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                        {data1.map(function(item,key){
                        return (<tr key={key}>
                        <td>{item.heading}</td>
                        <td>{item.date.toString()}</td>
                        <td>{item.status}</td>
                        <td><Button danger onClick={()=>deleteFunction(item.heading)}>Delete</Button></td>

                        </tr>);
                      })}
                </tbody>
              </Table>
        {/* Table component End */}

        </div>
     );
}
 
export default UserTask;