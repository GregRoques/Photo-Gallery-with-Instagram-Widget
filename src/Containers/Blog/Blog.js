import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './Blog.css'

//for parsing text
import ReactHtmlParser from 'react-html-parser';

//axios
import { read as axios} from '../../AxiosOrders'

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'



// const startingArticle= Object.keys(blogPosts)[Object.keys(blogPosts).length - 1]

class Blog extends Component{

    state = {
        entries: '',
        currentEntry: ''
    }

    componentDidMount() {
        this.props.Header("Blog");
        window.scrollTo(0, 0);

        axios.get()
            .then(response=>{
                const blogReturn = Object.values(response.data.users)[0]
                const currentEntryValue = Object.keys(blogReturn).length - 1
                this.setState({
                    entries: blogReturn,
                    currentEntry: Object.values(blogReturn)[currentEntryValue]
                })
            })
        .catch(error=> {
            this.props.Header('Error');
        })
    }

    click =(newPublish)=>{
        const currentEntryValue = this.state.entries[newPublish]
        console.log(currentEntryValue)
       this.setState({
           currentEntry: currentEntryValue
       })
    }


    
    render(){
        console.log(this.state.currentEntry)
        return(
            <div className='fadeIn'>
                <div className='blogAlign'>
                    <div className='articleColumn'>
                        <div className='articlePadding'>
                            <div className ='blogEntryContainer'>
                                <div className ='blogEntryHeader'>{this.state.currentEntry.title}</div>
                                <div className ='blogEntryDate'>{this.state.currentEntry.date}</div>
                                <div className ='blogEntryParagraph'>{ ReactHtmlParser(this.state.currentEntry.text)}</div>
                            </div>
                        </div>
                    </div>
                    <div className='previousPostsColumn'>
                        <div className='previousPostsContainer'>
                            <div className='previousPostText'>
                            <h1 className='previousTitle'>Previous</h1>
                            {Object.keys(this.state.entries).reverse().map((post,i)=> {
                                return(
                                    <div key={i} onClick={()=>this.click(post)}>
                                        <span className="arrowColor">></span> <span className="selectPreviousHover"><b><i className="titleColor">{this.state.entries[post].date}</i></b></span>
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