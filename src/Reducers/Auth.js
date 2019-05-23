import * as actionType from '../Actions/Auth'

const initialState = {
    idToken: null,
    userId: null,
    error: null
}

const authReducer = (state = initialState, action) =>{
    // console.log(action.idToken, action.userId)
    switch(action.type){
        case actionType.AUTH_SUCCESS:
            return{
                ...state,
                idToken: action.idToken,
                userId: action.userId,
                error: null,
            }
        case actionType.authFail:
            return{
                ...state,
                error: action.error,
            }
        default: 
            return state;
    }
}

export default authReducer;