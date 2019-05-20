const credentialState = {
    msg:''
};

const loginState = {
    loggedIn: false,
};

export function message(state = credentialState, action){
    // console.log(action.payload)
    if(action.type==='CHECK_CREDENTIALS'){
       
        if(action.payload.email !=="greg@gregroques.com"){
            return{
                ...state,
                msg: 'badUser'
            }
        }

        if(action.payload.password !=="LilNacheauxNola"){
            return{
                ...state,
                msg: 'badPassword'
            }
        }

        if(action.payload.password ==="LilNacheauxNola" && action.payload.email !=="greg@gregroques.com"){
            return{
                ...state,
                msg: 'loginSuccess',
            }
        }
 
    } else {
        return state;
    }
}

export function gregGo(state = loginState, action){
    // console.log(action.payload)
    if(action.type==='LOGGED_IN'){
        return action.payload;
    } else{
        return state;
    }
}