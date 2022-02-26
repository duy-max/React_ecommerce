//import * as types from "./../constants/actionTypes";
import * as Message from "./../constants/message";
import * as Types from "./../constants/actionTypes";
var initialState = Message.MSG_WELCOME;
const message = (state = initialState, action) =>{

    switch (action.type){
         case  Types.CHANGE_MSG:               
          return  action.message;
        default:
            return state ;

    }
}



export default message;