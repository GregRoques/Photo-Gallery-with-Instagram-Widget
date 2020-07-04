import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './Blog.css'
import { read } from '../../AxiosOrders'

//for parsing text
import ReactHtmlParser from 'react-html-parser';

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

class Blog extends Component{

    //=========================================================
    // State

    state = {
        entries:'',
        currentEntry: ''
    }

    //=========================================================
    // componentDidMount

    componentDidMount() {
        read.get()
        .then(response=>{
            console.log(response)
            let displayArticle = '';
            const blogReturn = Object.values(response.data.users)[0];
            const lastObject = Object.keys(blogReturn).length - 1;
            if(window.location.pathname === '/blog'){
                displayArticle = Object.keys(blogReturn)[lastObject];
                window.history.pushState(null, null, `/blog/${displayArticle}`);
            }else{
                const currentPathname =(window.location.pathname).split('/blog/').pop();
                if(blogReturn[currentPathname]){
                    displayArticle = currentPathname;
                }else{
                    displayArticle = Object.keys(blogReturn)[lastObject];
                    window.history.pushState(null, null, `/blog/${displayArticle}`);
                }
            }
            this.setState({
                entries: blogReturn, 
                currentEntry: blogReturn[displayArticle]
            })
            this.props.Header('Blog')
        })
        .catch(error=> {
            this.props.Header('Error');
            console.log(error)
        })
        window.scrollTo(0, 0);
    }

    //=========================================================
    // Event Listener

    click =(newPublish)=>{
        const currentEntryValue = this.state.entries[newPublish]
        window.history.pushState(null, null, `/blog/${newPublish}`)
       this.setState({
           currentEntry: currentEntryValue
       })
    }

    //=========================================================
    //  Render/Return

    render(){
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
                                        <div key={i} className="previousMargin" onClick={()=>this.click(post)}>
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