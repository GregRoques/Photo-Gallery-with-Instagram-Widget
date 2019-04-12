function SetHeader(page){
    // console.log(page)
    return{
        type: 'CHANGE_HEADER',
        payload: page,
    }
}

export default SetHeader;