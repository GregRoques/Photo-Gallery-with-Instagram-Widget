import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './Blog.css'

import MetaTags from 'react-meta-tags';

// Blog Post Routes
import Welcome from '../../Components/BlogEntries/BlogEntries'

// Redux
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import SetHeader from '../../Actions/SetHeader'



const blogPosts = {
'Welcome':{
    date: '4/16/19',
    route: <Welcome/>
    },
}

const startingArticle= Object.keys(blogPosts)[Object.keys(blogPosts).length - 1]

class Blog extends Component{

    componentDidMount() {
        this.props.SetHeader("Blog");
        window.scrollTo(0, 0);
    }

    click =(newPublish)=>{
       this.setState({
           currentRoute:newPublish
       })
    }


    state ={
        currentRoute: startingArticle
    }
    
    render(){
        // console.log(this.state.currentRoute)
        return(
            <div className='fadeIn'>
                <MetaTags> 
                    <meta property="og:site_name" content="Greg Roques"/>
                    <meta property="og:title" content="Software Developer"/>
                    <meta property="og:description" content="Software Developer and Graphic Artist living and building in Atlanta, GA."/>
                    <meta property="og:image" content="public/socialLink.png"/>
                    <meta property="og:url" content="http://www.GregRoques.com/blog"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                </MetaTags>
                <div className='blogAlign'>
                    <div className='articleColumn'>
                        <div className='articlePadding'>
                            {blogPosts[this.state.currentRoute]['route']}
                        </div>
                    </div>
                    <div className='previousPostsColumn'>
                        <div className='previousPostsContainer'>
                            <div className='previousPostText'>
                            <h1 className='previousTitle'>Previous</h1>
                            {Object.keys(blogPosts).map((posts,i)=> {
                                return(
                                    <div key={i} onClick={()=>this.click(posts)}>
                                        <span className="arrowColor">></span> <span className="selectPreviousHover"><b className='titleColor'>{posts} </b> <i>{blogPosts[posts]['date']}</i></span>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
        SetHeader: SetHeader
        }, dispatch
    )
}

export default connect(null, mapDispatchToProps)(Blog);