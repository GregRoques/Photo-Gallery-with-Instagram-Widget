import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import { Link }  from 'react-router-dom';
import "./Design.css";

class Design extends Component{
    render(){
        return(
            <div className="fadeIn">
                <Magazines/>
                <Photography/>
                <Articles/>
                <div className='redirectLinks'>
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/">Home</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/portfolio"> Portfolio</Link>
                </div>
            </div>
        )
    }
    

}
export default Design;