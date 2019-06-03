import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import ArchiveModal from './archiveModal'

// actions
import SetHeader from '../../Actions/SetHeader'
import { logOut } from '../../Actions/Auth'

// backend
import { write as axios} from '../../AxiosOrders'

// =================================================================
// Get Today's Date

var todaysDate = new Date()
var day = ((todaysDate.getDate()).toString()).replace(/^0+/, '')
var month = ((todaysDate.getMonth()+1).toString()).replace(/^0+/, '')
var year = todaysDate.getFullYear()

var todayReadableDate = month + "–" + day + "–" + year
    
// =================================================================

class Entries extends Component{

    state={
        newEntry: false,
        title:'',
        date: todayReadableDate,
        text:''
    }

    componentDidMount() {
        this.props.Header("Welcome, Greg");
        window.scrollTo(0, 0);
    }

// =================================================================
// Tile, Date, and Text Date Listeners

    titleChangedHandler = (e) =>{
        this.setState({
            title: e.target.value
        })
    }

    dateChangedHandler = (e) =>{
        this.setState({
            date: e.target.value
        })
    }

    textChangedHandler = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    submitHandler = () =>{
        const myArticle = {
            title: this.state.title,
            date: this.state.date,
            text: this.state.text
        }
        axios.post(`${this.props.userId}.json?auth=${this.props.idToken}`, myArticle)
        .then(response=>{
            this.props.Header('Post Successful');
            console.log(response);
        })
        .catch(error=>{ 
            this.props.Header('Post Error');
            console.log(error)
        })
    }

    // =================================================================
    // Archive Modal

    openModal = () =>{
        this.setState({
          newEntry: true
        })
      }
    
      closeModal = () =>{
        this.setState({
          newEntry: false
        })
      }

    render(){
        
        return(
            <div>
                <ArchiveModal show={this.state.newEntry} closed={this.closeModal}/>
                <div>
                    You will be logged out at {localStorage.getItem('logOutTime')}
                    <br/>
                    <button onClick={()=>this.props.LogOut()}>Log Out</button>
                </div>
                
                <div>
                    <input 
                        type="text" 
                        maxLength="25"
                        placeholder="title" 
                        onChange={this.titleChangedHandler}
                        value={this.state.title}
                    />
                    <br/>
                    <input 
                        type="text" 
                        placeholder="date" 
                        maxLength="10"
                        onChange={this.dateChangedHandler}
                        value={this.state.date}
                    />
                    <br/>
                    <input 
                        type="text"
                        maxLength="1200" 
                        placeholder="text" 
                        onChange={this.textChangedHandler}
                        value={this.state.text}/>
                </div>
                <button onClick={()=> this.openModal()}>Update Existing</button>
                <button onClick={()=> this.submitHandler()}>Submit</button>
            </div>
        )

        
    }

}

const mapStateToProps = state =>{
    return{
        userId: state.auth.userId,
        idToken: state.auth.idToken
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        Header: (page) => dispatch(SetHeader(page)),
        LogOut: () => dispatch(logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entries);