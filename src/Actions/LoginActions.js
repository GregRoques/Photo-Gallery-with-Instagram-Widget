export function CheckCredentials (email, password){
    // console.log(page)
    return{
        type: 'CHECK_CREDENTIALS',
        payload: email, password
    }
}

export function Proceed (shouldLogin){
    // console.log(page)
    return{
        type: 'LOGGED_IN',
        payload: shouldLogin,
    }
}