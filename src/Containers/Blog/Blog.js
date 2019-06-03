import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './Blog.css'

//axios
import { read as axios} from '../../AxiosOrders'

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'



// const startingArticle= Object.keys(blogPosts)[Object.keys(blogPosts).length - 1]

class Blog extends Component{

    state = {
        entries: ''
    }

    componentDidMount() {
        this.props.Header("Blog");
        window.scrollTo(0, 0);

        axios.get()
            .then(response=>{
                this.setState({
                    entries: Object.values(response.data.users)[0]
                })
            })
        .catch(error=> {
            this.props.Header('Error');
        })
    }

    click =(newPublish)=>{
       this.setState({
           currentRoute:newPublish
       })
    }


    // state ={
    //     currentRoute: startingArticle
    // }
    
    render(){
        console.log(this.state.entries)
        return(
            <div className='fadeIn'>
                {/* <div className='blogAlign'>
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
                </div>*/}
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