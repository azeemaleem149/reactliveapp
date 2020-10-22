import React,{useState} from 'react';
import secretContext,{taskData} from './myContext';


const MyProvider = (props) => {
    let values=localStorage.getItem('values');
    let credentials=JSON.parse(values);
const [provideValues,setprovideValues]=useState({heading:'',date:'',status:''});



    return ( 
        <>  
    <secretContext.Provider value={credentials}> 
        <taskData.Provider value={{provideValues,setprovideValues}}>
            {props.children}
        </taskData.Provider>
    </secretContext.Provider>
        </>
     );
}
 
export default MyProvider;