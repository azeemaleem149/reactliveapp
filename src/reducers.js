const iState='';
const rootReducer = (state=iState,action) => {
   if(action.type==="getValues"){
       return action.payload
       
   }
   return state;
}
 
export default rootReducer;