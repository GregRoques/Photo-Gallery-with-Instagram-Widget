function SetHeader(page){
    return{
        type: 'CHANGE_HEADER',
        payload: page,
    }
}

export default SetHeader;