export default function(state = 'Software Developer', action){
    // console.log(action.payload)
    if(action.type==='CHANGE_HEADER'){
        return action.payload;
    }else{
        return state;
    }

    }