import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import "./Design.css";

class Design extends Component{
    render(){
        return(
            <div className="fadeIn">
                <Magazines/>
                <Photography/>
            </div>
        )
    }
    

}
export default Design;