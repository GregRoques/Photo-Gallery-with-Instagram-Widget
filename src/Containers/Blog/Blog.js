import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './Blog.css'

//for parsing text
import ReactHtmlParser from 'react-html-parser';

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

class Blog extends Component{

    state = {
        currentEntry: (window.location.pathname).split("/blog/").pop()
    }

    componentDidMount() {
        if(!this.props.articles){
            this.props.Header("Error");
        }else{
            this.props.Header("Blog");
        }
        window.scrollTo(0, 0);
    }

    click =(newPublish)=>{
        const currentEntryValue = this.state.entries[newPublish]
        console.log(currentEntryValue)
       this.setState({
           currentEntry: currentEntryValue
       })
    }


    
    render(){
        return(
            <div className='fadeIn'>
                <div className='blogAlign'>
                    <div className='articleColumn'>
                        <div className='articlePadding'>
                            <div className ='blogEntryContainer'>
                                <div className ='blogEntryHeader'>{this.state.currentEntry}</div>
                                <div className ='blogEntryDate'>{this.state.currentEntry.date}</div>
                                <div className ='blogEntryParagraph'>{ ReactHtmlParser(this.state.currentEntry.text)}</div>
                            </div>
                        </div>
                    </div>
                    <div className='previousPostsColumn'>
                        <div className='previousPostsContainer'>
                            <div className='previousPostText'>
                            <h1 className='previousTitle'>Previous</h1>
                            {Object.keys(this.props.articles).reverse().map((post,i)=> {
                                return(
                                    <div key={i} className="previousMargin" onClick={()=>this.click(post)}>
                                        <span className="arrowColor">></span> <span className="selectPreviousHover"><b><i className="titleColor">{this.props.articles[post].date}</i></b></span>
                                    </div>
                                )
                            })}
            
                            </div>
                        </div>
                    </div>
                </div>
                <div className='redirectLinks'>
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/">Home</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/about"> About</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/portfolio"> Portfolio</Link>
                </div> 
            </div>
        )
    }

}

const mapDispatchToProps = dispatch =>{
    return {
        Header: (page) => dispatch(SetHeader(page))
    }
}

export default connect(null, mapDispatchToProps)(Blog);