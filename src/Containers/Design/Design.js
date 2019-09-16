import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import Film from './film'
import "./Design.css";

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

class Design extends Component{

    componentDidMount() {
        this.props.Header("Media Samples");
        window.scrollTo(0, 0);
    }



    render(){
        return(
            <div className="fadeIn">
                <Magazines/>
                <Photography/>
                <Articles/>
                <Film/>
            </div>
        )
    }
    

}

const mapDispatchToProps = dispatch =>{
    return{
         Header: (page) => dispatch(SetHeader(page))
    }
 }

export default connect(null, mapDispatchToProps)(Design);