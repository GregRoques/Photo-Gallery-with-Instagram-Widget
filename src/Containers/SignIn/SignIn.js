import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../Actions/Auth'
import SetHeader from '../../Actions/SetHeader'

class SignIn extends Component{

    state={
        email:'',
        password:''
    }

    componentDidMount() {
        this.props.Header("Sign In");
        window.scrollTo(0, 0);
    }


changedHandler = (e) =>{
    this.setState({
        [e.target.id]:e.target.value
    })
}

submitHandler = (e) =>{
    e.preventDefault();
    this.props.onAuth(this.state.email,this.state.password)

}


// ==============================================================================
// Render & Return

    render(){

        
        if (this.props.error !== null){
            this.props.Header((this.props.error).replace(/_/g, ' '))
        }

        return(
            <div>
                <h1>Log In</h1>
                <br/>
                <input 
                    type="text"
                    placeholder="Email Address"
                    id = "email"
                    onChange={this.changedHandler}
                    value={this.state.email}
                />
                <input 
                    type="password" 
                    placeholder="password"
                    id = "password"
                    onChange={this.changedHandler}
                    value={this.state.password}
                />
                <button onClick={(e) => this.submitHandler(e)}>Submit</button>
            </div>
        );
    }
};

const mapStateToProps = state =>{
    return{
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        Header: (page) => dispatch(SetHeader(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);