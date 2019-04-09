import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import "./Design.css";

class Design extends Component{
    render(){
        return(
            <div>
                <Magazines/>
                <Photography/>
            </div>
        )
    }
    

}
export default Design;