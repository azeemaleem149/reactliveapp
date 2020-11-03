import React from 'react';
import localContext from './myContext';


const MyProvider = (props) => {
    const item=window.localStorage.getItem('previousData');
    const item1=JSON.parse(item);

    return ( 
        <>  
    <localContext.Provider value={item1}> 
            {props.children}
    </localContext.Provider>
        </>
     );
}
 
export default MyProvider;