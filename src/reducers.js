const iState={
    values:{}
}
const rootReducer = (state=iState,action) => {
   if(action.type==="getValues"){
       return{
        values:action.payload
       }
   }
   return state;
}
 
export default rootReducer;