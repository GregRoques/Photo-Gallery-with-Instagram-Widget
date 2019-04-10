import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './Blog.css'

// Blog Post Routes
import Welcome from '../../Components/BlogEntries/Welcome'

const blogPosts = {
'Welcome':{
    date: '4/10/19',
    route: <Welcome/>
    },
}

const startingArticle= Object.keys(blogPosts)[Object.keys(blogPosts).length - 1]

class Blog extends Component{

    click =(newPublish)=>{
       this.setState({
           currentRoute:newPublish
       })
    }

    state ={
        currentRoute: startingArticle
    }
    
    render(){
        console.log(this.state.currentRoute)
        return(
            <div className='fadeIn'>
                <div className='blogAlign'>
                    <div className='articleColumn'>
                        <div className='articlePadding'>
                            {blogPosts[this.state.currentRoute]['route']}
                        </div>
                    </div>
                    <div className='previousPostsColumn'>
                        <div className='previousPostsContainer'>
                            <div className='previousPostText'>
                            <h1>Previous</h1>
                            {Object.keys(blogPosts).map(posts=> {
                                return(
                                    <div onClick={()=>this.click(posts)}>
                                        > <b>{posts}:</b> <i>{blogPosts[posts]['date']}</i>
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

export default Blog;