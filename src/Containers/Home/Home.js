import React, {Component} from "react";
import {Route, Redirect}  from 'react-router-dom';
import "./Home.css"

import about from '../About/About'
import Blog from '../Blog/Blog'
import Portfolio from '../../Components/Portfolio/Portfolio'

class Home extends Component{

    state = {
        categories:['about', 'portfolio', 'blog'],
        go:'',
        fade: [],
        newPage: false
    }
    
    pageHandler = (nextPage) => {
       const catArray = this.state.categories

       if(catArray.includes(nextPage)){
           var go = nextPage
           var fade = []

           catArray.map((other)=>{
               if(other != nextPage){
                   fade.push(other)
               }
            })

        }

        // console.log(go)
        // console.log(fade)
        
        this.setState({
            go: go,
            fade: fade,
            newPage: true
        })
    }
    

    render(){
        if(this.state.newPage === false){
            return(
                    <div className="homeBody">
                        <div className="padding768 circlesJustify">
                            <div onClick={()=>this.pageHandler('about')} className="about">About</div>
                        </div>
                        <div className="padding768 circlesJustify">
                            <div onClick={()=>this.pageHandler('portfolio')} className="portfolio">Portfolio</div>
                        </div>
                        <div className="circlesJustify">
                            <div onClick={()=>this.pageHandler('blog')} className="blog">Blog</div>
                        </div>    
                               
                    </div>
            )
        }else{
            console.log(this.state)
            return(
                <div>
                <Route path="/about" Component={about}/>
                <Route path="/portfolio" Component={Portfolio}/>
                <Route path="/blog" Component={Blog}/>   
                </div>  
            )
        }
    }

}

export default Home;