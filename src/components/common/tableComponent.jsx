import React,{useContext} from 'react';
// import {BeatLoader} from 'react-spinners';
import secretContext from '../../myContext';
import { Table } from 'antd';

// Table Components Start from here 
const TableComponent = () => {


  // All the state variables here 
  // const [show,setShow]=useState(false);
  // const [loading,setLoading]=useState(false);
  // const [name,setName]=useState("");
  // const [email,setEmail]=useState("");
  // const [phone,setPhone]=useState("");
  // const [password,setPassword]=useState("");

//   useEffect(()=>{
//     if(loading){
//       setTimeout(() => {
//         setLoading(false)
//       }, 1500);
//     }
//   },[loading]);

// const helloHandeler=()=>{
//     setLoading(!loading);
//     setTimeout(()=>{
//       setLoading(!loading);
//       setShow(!show);
//     },1500);
//     // Geting Data from Local storage 
//     getDetails(); 
//   };
//   if (loading) return(<BeatLoader />) 

  // const getDetails=()=>{
  //   let allValues=localStorage.getItem('values');
  //   let getValues=JSON.parse(allValues);
  //   setName(getValues.nickname);
  //   setEmail(getValues.email);
  //   setPhone(getValues.phone);
  //   setPassword(getValues.password);
  

  // }

  const values=useContext(secretContext);


    // let allValues=localStorage.getItem('values');
    // let getValues=JSON.parse(allValues);
    //  let name=getValues.nickname;
    // let email=getValues.email;
    // let phone=getValues.phone;
    // let password=getValues.password;
  



  // Table Column Data 
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
        },
        {
          title: 'Password',
          dataIndex: 'password',
        },
      ];

      // Fething Data From State 
      let data = [
        {
          key: '1',
          name:values.nickname,
          email:values.email,
          phone:values.phone,
          password1: values.password,
        },
      ];
      
    return ( 
        <div>
            <Table columns={columns} dataSource={data} size="small" />
            {/* <Button type="primary" onClick={helloHandeler}>View Details</Button> */}
        </div>
     );
}
 
export default TableComponent;


// Table Components End here 