import {combineReducers} from 'redux';
import UserReducer from './reducer_user';
import ActiveUserReducer from './reducer_active_user';


const Reducer = combineReducers({
  users: UserReducer, 
  activeUser: ActiveUserReducer
}); 

export default Reducer;


// return this.props.users.map((user) => {
//   return (
//       <Button
//           key={user.id}
//           onClick={() => this.props.selectUser(user)}
//       >Added To!</Button>
//   );
// });
// }

// const iState ={
//    // type: 'SET_VISIBILITY_FILTER1',
//     price:350,
//      name:'ram',
//     // name1:'poooja'
// } 
// const iState1 = {    
//     type: 'SET_VISIBILITY_FILTER',
//     name:'ram'
//   }
// const Reducer = (state=iState , action) =>{
//      switch (action.type) {
//     case 'SET_VISIBILITY_FILTER1':
//        // newState.price;
//       return         {
//           price: action.payload
          
//         }
//     case 'SET_VISIBILITY_FILTER':
// //        newState.name;
//   //      break;
//         return{
//             name: action.payload
//           }
//     default:
//       return state
//   }
//     // if(action.type === 'CHANGE_NAME')
//     // {
//     //     return{
//     //         // ...state,
//     //         price:action.payload
//     //     }
//     // }
//     // // console.log('hello', state.wishes);
//     // return state;
// }
// export default Reducer;   