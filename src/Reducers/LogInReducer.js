const initialState = {
    loggedIn: false,
};

export default function gregGo(state = initialState, action){
    // console.log(action.payload)
    if(action.type==='LOGGED_IN'){
        return action.payload;
    } else{
        return state;
    }
}