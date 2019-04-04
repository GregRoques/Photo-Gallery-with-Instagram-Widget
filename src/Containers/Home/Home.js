import React, {Component} from "react";
import {Redirect, Link}  from 'react-router-dom';
import "./Home.css"

class Home extends Component{

    state ={
        go: '',
        fade:[],
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
        this.setState({
            go: go,
            fade: fade,
            nextPage:true
        })
       

    }
    

    render(){
        let go = this.state.go
        let fade = this.state.fade
        
        const forwardPage = () =>{
            console.log('No Bueno.')
          return (
            <Redirect to="/about"/>
          )
        }
        
        if(this.state.nextPage === true){
            document.querySelector(`.${go}`).style.transform= 'scale(0)'
            document.querySelector(`.${go}`).style.transition= '0.75s all'
            document.querySelector(`.${fade[0]}`).style.opacity= '0'
            document.querySelector(`.${fade[0]}`).style.transition= '1s all'
            document.querySelector(`.${fade[1]}`).style.opacity= '0'
            document.querySelector(`.${fade[1]}`).style.transition = '1s all'
            setTimeout(forwardPage, 1000)
        }
            return(
                <div className="homeBody fadeIn">
                    <div className="padding768 circlesJustify">
                        <div onClick={()=>this.pageHandler('about')} className="about">About</div>
                    </div>
                    <div className="padding768 circlesJustify">
                        <div onClick={()=>this.pageHandler('portfolio')} className="portfolio">Portfolio</div>
                    </div>
                    <div className="circlesJustify">
                        <div onClick={()=>this.pageHandler('blog')} className="blog">Blog</div>
                    </div>  

                    {/* The link is just for text purposes...it is Fake News */}
                    <div><Link to="/about" >I link to the about page!</Link></div>
                    
                </div>
            )
      
    }

}

export default Home;