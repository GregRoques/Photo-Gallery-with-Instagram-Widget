export function Proceed (shouldLogin){
    // console.log(page)
    return{
        type: 'LOGGED_IN',
        payload: shouldLogin,
    }
}