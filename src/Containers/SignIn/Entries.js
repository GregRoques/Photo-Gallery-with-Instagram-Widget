import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetHeader from '../../Actions/SetHeader'

class Entries extends Component{

    state={
        NewEntry: true
    }

    componentDidMount() {
        this.props.Header("Welcome, Greg");
        window.scrollTo(0, 0);
    }

    newEntry = () =>{
        this.setState({
            NewEntry: true
        })
    }

    oldEntry = () =>{
        this.setState({
            NewEntry: false
        })
    }

    render(){

        const newEntryDisplay = () =>{
            return(
                <div>
                    <input type="text" maxlength="50" placeholder="title">title</input>
                    <input id="date" min="01-01-2019" max="01-01-2030" type="date"></input>
                    <input type="text" maxlength="1200" placeholder="title">title</input>
                </div>
            )
        }

        return(
            <div>
                <button onClick={this.oldEntry}>Add New Entry</button>
                <button onClick={this.newEntry}>Update Existing Entry</button>
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