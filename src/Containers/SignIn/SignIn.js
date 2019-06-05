import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './signIn.module.css'

import { kanye } from '../../AxiosOrders'
import * as actions from '../../Actions/Auth'
import SetHeader from '../../Actions/SetHeader'

class SignIn extends Component{

    componentDidMount() {
        this.props.Header("Sign In");
        window.scrollTo(0, 0);

        //Inspirational quote to keep me motivated
        kanye.get()
        .then(response=>{
            this.setState({
                inspirationalQuote: response.data.quote
            })        
        })
    
        .catch(error=> {
            throw error
        })
    }

    state={
        email:'',
        password:'',
        inspirationalQuote:''
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
                {this.state.inspirationalQuote ? 
                    <div className={css.quoteStyle}>
                        "{this.state.inspirationalQuote}" <b><i>–Kanye West</i></b>
                    </div> 
                : null}
                <div className={css.logInPosition}>
                    <div className={css.logInForm}>
                        <div>
                            <input 
                                className={css.inputText}
                                type="text"
                                placeholder="Email Address"
                                id = "email"
                                onChange={this.changedHandler}
                                value={this.state.email}
                            />
                        </div>
                        <div>
                            <input 
                                className={css.inputText}
                                type="password" 
                                placeholder="Password"
                                id = "password"
                                onChange={this.changedHandler}
                                value={this.state.password}
                            />
                        </div>
                        <div>
                            <button className={css.inputSubmit} onClick={(e) => this.submitHandler(e)}>Submit</button>
                        </div>
                    </div>
                </div>
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