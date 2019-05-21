import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import './user.module.css'

import SetHeader from '../../Actions/SetHeader'
import { Proceed } from '../../Actions/LoginActions'

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

    submitHandler = () =>{
        console.log('hi')
        if((this.state.email).toLowerCase() !== "greg@gregroques.com"){
                console.log('bad email')
                // this.props.SetHeader("Wrong Email");
                this.setState({
                    email: '',
                    password: ''
                })
        }
            
        if(this.state.password !== "LilNacheauxNola"){
            console.log('bad password')
            // this.props.SetHeader("Wrong Password");
            this.setState({
                email: '',
                password: ''
            })
        }
            
        if ((this.state.email).toLowerCase() === "greg@gregroques.com" && this.state.password === "LilNacheauxNola"){
                console.log('fuck yeah')
            // this.props.SetHeader("Welcome, Greg");
            // this.props.proceed(true)
        }
    }

    changedHandler = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
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
                    <button onClick={this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}


// function mapDispatchToProps(dispatch){
//     return bindActionCreators(
//         {
//             SetHeader,
//             // Proceed
//         }, 
//         dispatch
//     )
// }

export default connect(null, mapDispatchToProps)(LogIn);