import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from './SignIn'
import Entries from './Entries'

class Update extends Component{
    render(){

        if(this.props.userId === null && this.props.idToken === null){
            return(
                <div>
                    <SignIn/>
                </div>
            )
        } else{
            return(
                <div>
                    <Entries/>
                </div>
            )
        }
    }
}

const mapStateToProps = state =>{
    return{
        userId: state.auth.userId,
        idToken: state.auth.idToken
    }
}

export default connect(mapStateToProps, null)(Update)