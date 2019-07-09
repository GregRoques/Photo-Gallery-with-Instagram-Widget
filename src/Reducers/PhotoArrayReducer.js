import * as actionType from '../Actions/PhotoArray'

const initialState = {
    reduxPhoto: null
}

const PhotoArrayReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionType.SET_PHOTO_ARRAY:
            return{
                ...state,
                reduxPhoto: action.array
            }
        default: 
            return state;
    }
}

export default PhotoArrayReducer;