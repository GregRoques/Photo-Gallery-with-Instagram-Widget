import React, {Component} from "react";
import {Route, Redirect}  from 'react-router-dom';
import "./Home.css"

import about from '../About/About'
import Blog from '../Blog/Blog'
import Portfolio from '../../Components/Portfolio/Portfolio'

class Home extends Component{

    state ={
        forward: '',
        nextPage: false
    }

    pageHandler = (nextPage) => {
       const catArray = ['about', 'portfolio', 'blog']

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
        
        const forwardPage = (go) => {
            this.setState({
                // forward: go,
                nextPage:true
            })
           }
        
        document.querySelector(`.${go}`).style.transform= 'scale(0)'
        document.querySelector(`.${go}`).style.transition= '0.75s all'
        document.querySelector(`.${fade[0]}`).style.opacity= '0'
        document.querySelector(`.${fade[0]}`).style.transition= '1s all'
        document.querySelector(`.${fade[1]}`).style.opacity= '0'
        document.querySelector(`.${fade[1]}`).style.transition = '1s all'
        setTimeout(forwardPage, 1000)

    }
    

    render(){
        if(this.state.nextPage === false){
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
            return(
                <div>
                    <Redirect to='/{this.state.forward}'/>
                    <Route path="/about" Component={about}/>
                    <Route path="/portfolio" Component={Portfolio}/>
                    <Route path="/blog" Component={Blog}/>   
                </div>
            )

            }
    }

}

export default Home;