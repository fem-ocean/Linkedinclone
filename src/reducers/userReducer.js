import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
    user: null,
}


const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default userReducer;


// A userreducer should also be called a state updater.
//In this build we are not using redux toolkit. Its good to have the knowledge without using redux toolkit.