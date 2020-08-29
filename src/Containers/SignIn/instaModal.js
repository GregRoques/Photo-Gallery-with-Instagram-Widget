import React, { Component } from "react";
import update from './instaModal.module.css'
import { instaWrite } from '../../AxiosOrders'

class instaModal extends Component{
    state={
        userName: "",
        userToken: "",
        isSubmitted: ""
    }

    valueHandler = (e) =>{
        [name, value] = e.target
        this.setState({
            [name]: value
        })
    }

    submitHandler = () =>{
        let updates = {};
        const [userName, userToken, isSubmitted] = this.state; 
        const createdOn = new Date().getTime(); 

        if(userName){
            update['userName'] = userName
        }

        if(userToken.length > 10){
            update['lttDate'] = createdOn;
            update['longTermToken'] = userToken;
        }

        if(isSubmitted){
            this.setState({
                userName: "",
                userToken: "",
                isSubmitted: ""
            })
        }else{
            instaWrite.post(`${this.props.databaseID}.json?auth=${this.props.databaseToken}`, updates)
            .then(response=>{
                const submitName = userName ? userName : this.props.userName
                const submitDate = userToken.length > 10 ? createdOn : this.props.expirationDate
                this.props.updateInsta(submitDate,submitName)
                this.setState({
                    isSubmitted:'Post Successful'
                })
            })
            .catch(error=> {
                console.log(error)
                this.setState({
                    isSubmitted:'Error in console.log! Please Try Again'
                })
            })
        }
    }

    render(){
        const cssModal = [
            update.Modal,
            this.props.show ? update.ModalOpen : update.ModalClosed
        ];
        return this.props.show ? (
                <div className={cssModal.join(' ')}>
                    <h1 className={update.archiveTitle}>Instagram</h1>
                {this.state.isSubmitted === "" ?
                <div>
                    <h3>Current User Name</h3>
                <input 
                        type="text" 
                        maxLength="50"
                        placeholder={this.props.userName}
                        onChange={this.valueHandler}
                        name="userName"
                        value={this.state.userName}
                    />
                    <h3>User Token</h3>
                    <input 
                        type="text" 
                        maxLength="255"
                        placeholder={ 
                            !this.props.expirationDate || this.props.expirationDate === 0 ?
                            `Token has Expired`:
                            `Expires in ${this.props.expirationDate} days`
                        }
                        onChange={this.valueHandler}
                        name="userToken"
                        value={this.state.userToken}
                    />
                </div> :
                <div>
                    {this.state.isSubmitted}
                </div>}
                    <button className={update.instaButtons} onClick={props.closed}>
                        Close
                    </button>
                    {this.state.isSubmitted !== 'Error in console.log! Please Try Again' ?
                        <button className={update.closeButton} onClick={this.submitHandler}>
                            {this.state.isSubmitted === "" ? "Submit" : "Try Again?"}
                        </button> 
                    : null}
                </div> 
            ) : null;
        }
};

export default instaModal;