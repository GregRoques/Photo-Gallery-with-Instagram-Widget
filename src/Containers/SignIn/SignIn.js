import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions/Auth'

class SignIn extends Component{
    state={
        email:'',
        password:''
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

const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);