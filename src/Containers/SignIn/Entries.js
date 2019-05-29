import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import ArchiveModal from './archiveModal'

// actions
import SetHeader from '../../Actions/SetHeader'
import { logOut } from '../../Actions/Auth'

// =================================================================
// Figure Out Time Left While Logged In

var currentDate = new Date()
var currentHour= currentDate.getHours()
var currentMinute = currentDate.getMinutes()

const logOutTime = ((currentHour > 12 ? (currentHour - 12) : currentHour) + 1).toString() + ":" +
    (currentMinute).toString() +
    (currentHour > 12 ? 'pm' : "am")
// console.log(logOutTime)
    
// =================================================================

class Entries extends Component{

    state={
        newEntry: false,
        title:'',
        date: '',
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
                    You will be logged out at {logOutTime}
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
                    <input 
                        type="date" 
                        min="01-01-2019" 
                        max="01-01-2030" 
                        onChange={this.dateChangedHandler}
                        value={this.state.date}
                    />
                    <input 
                        type="text"
                        maxLength="1200" 
                        placeholder="text" 
                        onChange={this.textChangedHandler}
                        value={this.state.text}/>
                </div>
                <button onClick={()=> this.openModal()}>Update Existing</button>
                <button>Submit</button>
            </div>
        )

        
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        Header: (page) => dispatch(SetHeader(page)),
        LogOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(Entries);