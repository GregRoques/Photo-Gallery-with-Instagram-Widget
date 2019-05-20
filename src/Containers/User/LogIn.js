import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import './user.module.css'

import SetHeader from '../../Actions/SetHeader'
import { CheckCredentials, Proceed } from '../../Actions/LoginActions'

class LogIn extends Component{
    
// ==============================================================================
// Header Message

    componentDidMount() {
        this.props.SetHeader("Log In");
        window.scrollTo(0, 0);
    }

// ==============================================================================
// State

    state = {
        email: '',
        password: '',
    }

// ==============================================================================
// Change and Submit Handlers

    submitHandler = (e) =>{
        e.preventDefault();
        this.props.CheckCredentials(this.state.email, this.state.password)
    }

    changedHandler = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }


// ==============================================================================
// Confirms if Email/Password are correct and loggedIn === true

    componentWillReceiveProps(newProps){
        if(newProps.msg === "badUser"){
            this.props.SetHeader("Wrong Email");
            
        } else if(newProps.msg === "badPassword"){
            this.props.SetHeader("Wrong Password");
        
        } else if (newProps.msg === "loginSuccess"){
            this.props.SetHeader("Welcome, Greg");
            this.props.proceed(true)
        }
    }

// ==============================================================================
// Render

    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Email Address"
                        id = "email"
                        onChange={this.changedHandler}
                        value={this.state.email}
                    />
                    <input 
                        type="text" 
                        placeholder="password"
                        id = "password"
                        onChange={this.changedHandler}
                        value={this.state.password}
                    />
                    <button onClick={()=>this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        msg: state.msg
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            SetHeader,
            CheckCredentials,
            Proceed
        }, 
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);