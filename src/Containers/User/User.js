import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogIn from './LogIn';
// import Update from './Update'

class User extends Component{
    
    render(){
        if (this.props.loggedIn){
            return(
                <div>
                    whatever
                </div>
            )
        }else{
            return(
                <LogIn/>
            )
        }
    }
}

const mapStateToProps = state =>{
    return{
        LoggedIn: state.LoggedIn
    }
}

export default connect(mapStateToProps)(User)