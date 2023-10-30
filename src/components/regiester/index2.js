// // import React, { useEffect, useState } from "react";

// // const Form1 = () => {
// //     const [data, setData] = useState(null); // Set an initial state of null

// //     useEffect(() => {
// //         fetch('http://localhost:5000/api/storedata')
// //             .then(response => response.json())
// //             .then(data => setData(data))
            
// //     }, []);

// //     return (
// //         <div>
// //             {data !== null ? (
// //                 <div>
                  
// //                     {console.log(data)}
// //                 </div>
// //             ) : (
// //                 <div>Loading...</div>
// //             )}
// //         </div>
// //     );
// // }

// // export default Form1;
// import {redux} from 'redux'
// const createStore =  redux.createStore 
// const buyCoke = 'butcoke'
// function buycoke (){
//     return  {
//         type:buyCoke
//     }
// }
// const initial = {
//     num :20
// }
// const reducer = (state=initial,action)=>{
//     switch(action.type){
//         case buycoke:return {
//             ...state, num :state.num-1
//         }
//         default: return value
//     }
// }
// const store = createStore(reducer)
// console.log("happy",store.getState())
// const unsub = store.unsubscripe (()=>console.log('upload state'),store.getState)
// store.displatch(buycoke)
// store.displatch(buycoke)
// store.displatch(buycoke)