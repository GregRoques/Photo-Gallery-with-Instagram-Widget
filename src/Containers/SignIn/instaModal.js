// import React, { Component } from "react";
// import update from './update.module.css'

// class InstaUpdateModal extends Component {

//     state = {
//         userName: {
//             display: "User Name",
//             valueName: "userName",
//             placeholder: "Please  Input a Value",
//             value: ""
//         },
//         longTermToken: {
//             display: "Long Term Token",
//             valueName: "longTermToken",
//             placeholder: "Please  Input a Value",
//             value: ""
//         },
//         lttRegisterDate: {
//             display: "LT Token Registration Date",
//             valueName: "lttRegisterDate",
//             placeholder: "Please  Input a Value",
//             value: ""
//         },
//         secret: {
//             display: "App Secret",
//             valueName: "secret",
//             placeholder: "Please  Input a Value",
//             value: ""
//         },
//         id: {
//             display: "App ID",
//             valueName: "id",
//             placeholder: "Please  Input a Value",
//             value: ""
//         },
//     }

//     componentDidMount(){
//         this.getCurrValues();
//     }

//     getCurrValues = () => {
//         //search parameter
//         .then(res =>{
//             const { appID, appSecret, longTermToken, lttDate, userName } = res;
//             this.setState({
//                 userName: {value: userName},
//                 longTermToken: {value: longTermToken},
//                 lttRegisterDate: {value: lttDate},
//                 secret: {value: appSecret},
//                 id:{ value: appID}
//             })
//         })
//         .catch(error=> {
//             console.log(error);
//         })
//     }

//     changeStateHandler = e =>{
//         const { name, value} = e.target
//         this.setState({
//             [name]: { value: value}
//         })
//     }


//     updateInsta = () => {
//         const { userName, longTermToken, lttRegisterDate, secret, id } = this.state
        
//         if (userName.value.length === 0 && longTermToken.value.length === 0 && lttRegisterDate.value.length === 0 && secret.value.length === 0 && id.value.length === 0){
//             const newValues = {
//                 appID : id.value,
//                 appSecret: secret.value,
//                 longTermToken: longTermToken.value,
//                 lttDate: lttRegisterDate.value,
//                 userName: userName.value
//             }
            
//             //write.patch(`${this.props.userId}/${this.state.updateArticleKey}/.json?auth=${this.props.idToken}`, newValues)
//             .then(()=>{
//                 this.props.Header('Insta Success');
//             })
//             .catch(error=>{ 
//                 this.props.Header('Insta Fail');
//                 console.log(error)
//             })
//         } else{
//             this.setState({
//                 userName: { placeholder: userName.value.length === 0 ? "ERROR! Must import a value." : ""},
//                 longTermToken: { placeholder: longTermToken.value.length === 0 ? "ERROR! Must import a value." : ""},
//                 lttRegisterDate: { placeholder: lttRegisterDate.value.length === 0 ? "ERROR! Must import a value." : ""},
//                 secret: { placeholder: secret.value.length === 0 ? "ERROR! Must import a value." : ""},
//                 id: { placeholder: id.value.length === 0 ? "ERROR! Must import a value." : ""}
//             })
//         }

//     }
    
//     render(){

        
//         const cssModal = [
//         update.Modal,
//         props.show ? update.ModalOpen : update.ModalClosed
//     ];
//         return props.show ? (
//             <div className={cssModal.join(' ')}>
//                 <h1 className={update.archiveTitle}>Instagram Details</h1>
//                <div>
//                 { this.state.map(item => {
//                     return (
//                         <div>
//                             <div>
//                                 {item.display}
//                             </div>
//                             <input 
//                                 type="text" 
//                                 placeholder={item.placeholder}
//                                 name={item.valueName}
//                                 onChange={this.changeStateHandler}
//                                 value={item.value}
//                             />
//                         </div>
//                     )
//                 })}
//                </div>
//                <button className={} onClick={this.updateInsta}>
//                     Update
//                 </button>
//                 <button className={update.closeButton} onClick={props.closed}>
//                     Close
//                 </button>
//             </div>
//         ) : null;
//     }
// };

// export default InstaUpdateModal;