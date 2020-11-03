import React,{useState,useEffect, useContext} from 'react';
import {Button,Modal} from 'antd';
import { Table } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import localContext from '../../myContext';
import './userTask.scss';
import TaskInputForm from './taskInputForm';
// import rootReducer from '../../reducers';

const deleteNotify=()=>{
  toast.info ("Task Deleted Successfully");
}
const UserTask = () => {
  const reducerData =useSelector(state=>state);
  const previousData=useContext(localContext);
  
  useEffect(() => {
    const item=window.localStorage.getItem('previousData');
    const item1=JSON.parse(item);
    if(item1){
      setData1(item1);
    }
   
  },[reducerData]);
  
  
  
  // const responseRef=useRef(reducerData);

 
   

  // All states here 
  const [visible,setVisible]=useState(false);
  const [data1,setData1]=useState([]);
  

  console.log("hi bro",...data1,reducerData);
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
      const getData=()=>{
      let tryValue=data1.slice();
      tryValue.push(reducerData);
      setData1(tryValue);
      }
      // Delete Task function 
      const deleteFunction=(val)=>{
        const filteredItems = data1.filter(item => item.heading !== val)
        setData1(filteredItems);
        localStorage.setItem('previousData',JSON.stringify(filteredItems));
        deleteNotify();
      }
  
  
    return ( 
        <div>
            <div className='taskContainer'>
            {data1.length>0 &&<strong style={{color:'#1890FF'}} className='taskCounter'>Total Tasks={data1.length}</strong>}
            <Button type="primary" onClick={showModal} className='taskButton'>+ Add Task</Button>
            </div>
            <div className="taskContainer1">
            
            </div>
            
            {data1.length<=0 &&
            <p className='noTaskTest'>No Tasks Available</p>
              }
            

            <Modal
                title="Put Your Task"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
                >
                <TaskInputForm action={handler} sendData={getData} />
            </Modal>
        
        {/* Table component start */}
        
            <Table striped bordered hover>
              
                <thead>
                {!data1.length<=0 && 
                  <tr>
                    <th>Heading of Task</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>  }
                </thead>
                {data1.length>0 && 
                <tbody>
                  
                        {data1.map(function(item,key){
                        return (<tr key={key}>
                        <td>{item.heading}</td>
                        <td>{String(item.date)}</td>
                      
                        <td>{item.status}</td>
                        <td><Button danger onClick={()=>deleteFunction(item.heading)}>Delete</Button></td>

                        </tr>);
                      })}
                </tbody>}
              </Table>

        {/* Table component End */}

        </div>
     );
}
// const mapStateToProps=(state)=>{
//   return{
//     heading:state.values.heading,
//     date:state.values.date,
//     status:state.values.status
//   }
// }
 
export default  UserTask;