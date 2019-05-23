import axios from 'axios'

import { AuthURL } from '../AxiosOrders';


export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'


export const authSuccess = (idToken, userId) =>{
    // console.log(idToken, '   THIS IS THE SECOND ID:   ', userId)
    return{
        type: AUTH_SUCCESS,
        idToken,
        userId
    }
}

export const authFail = (error) =>{
    // console.log(error)
    return{
        type: AUTH_FAIL,
        error
    }
}

export const auth = (email, password) =>{
    // console.log(email, password)
    return dispatch =>{

        const authData={
            email,
            password,
            returnSecureToken: true
        };
        // console.log(authData)
        axios.post(AuthURL, authData)
        .then(response =>{
            // console.log(response.data)
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            
        })
        .catch(error =>{
            // console.log(error.response.data.error.message)
            dispatch(authFail(error.response.data.error.message));
        });
    }
    
}