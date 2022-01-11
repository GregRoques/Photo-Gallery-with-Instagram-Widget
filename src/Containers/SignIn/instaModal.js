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
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    isClosed = () => {
        this.setState({
            isSubmitted: ""
        })
        this.props.closed()
    }

    submitHandler = () =>{

        let updates = {};
        const {userName, userToken, isSubmitted} = this.state; 
        const createdOn = new Date().getTime(); 

        if(userName){
            updates['userName'] = userName
        }

        if(userToken && userToken.length > 20){
            updates['lttDate']= createdOn;
            updates['longTermToken']= userToken
        }
        
        //console.log(updates)
        if(userName || (userToken && userToken.length > 20)){
            instaWrite.post(`${this.props.databaseID}.json?auth=${this.props.databaseToken}`, updates)
            .then(response=>{
                console.log(response)
                const submitName = userName ? userName : this.props.userName
                const submitDate = userToken ? createdOn : this.props.expirationDate
                this.props.updateInsta(submitDate, submitName)
                this.setState({
                    isSubmitted: "Success",
                    userName: "",
                    userToken: "",
                })
            })
            .catch(error=> {
                console.log(error)
                this.setState({
                    isSubmitted:'Error in console.log! Please Try Again',
                    userName: "",
                    userToken: "",
                })
            })
        } else if (isSubmitted === "") {
            this.setState({
                isSubmitted:"You must input a value to submit",
            })
        } else {
            this.setState({
                isSubmitted:'',
            })
        }
    }

    render(){
        const cssModal = [
            update.Modal,
            this.props.show ? update.ModalOpen : update.ModalClosed
        ];
        return this.props.show ? (
                <div className={cssModal.join(' ')} >
                    <h1 className={update.archiveTitle}>Instagram</h1>
                    {this.state.isSubmitted === "" ?
                    <div>
                        <h3>Current User Name</h3>
                        <input 
                            type="text" 
                            maxLength="50"
                            placeholder={this.props.userName}
                            name="userName"
                            onChange={this.valueHandler}
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
                            name="userToken"
                            onChange={this.valueHandler}
                            value={this.state.userToken}
                        />
                    </div> :
                    <div>
                        {this.state.isSubmitted}
                    </div>}
                        <button className={update.instaButtons} onClick={this.isClosed}>
                            Close
                        </button>
                        {this.state.isSubmitted !== 'Success' ?
                            <button type="submit" onClick={this.submitHandler} className={update.instaButtons}>
                                {this.state.isSubmitted === "" ? "Submit" : "Try Again?"}
                            </button> 
                        : null}
                </div> 
            ) : null;
        }
};

export default instaModal;