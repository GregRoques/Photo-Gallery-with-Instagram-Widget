import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetHeader from '../../Actions/SetHeader'

// =============================================================
// figure out when logged out

var currentDate = new Date()
var currentHour= currentDate.getHours()
var currentMinute = currentDate.getMinutes()

const logOutTime = ((currentHour > 12 ? (currentHour - 12) : currentHour) + 1).toString() + ":" +
    (currentMinute).toString() +
    (currentHour > 12 ? 'pm' : "am")
// console.log(logOutTime)
    
// =============================================================

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

    render(){
        console.log(this.state.date)
        return(
            <div>
                <div>
                    You will be logged out at {logOutTime}
                </div>
                <button>Update Existing Entry</button>
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
                <button>Submit</button>
            </div>
        )

        
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        Header: (page) => dispatch(SetHeader(page))
    }
}

export default connect(null, mapDispatchToProps)(Entries);