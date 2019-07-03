import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
// import Film from './Film'
import { Link }  from 'react-router-dom';
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
                {/* <Film /> */}
                <div className='redirectLinks'>
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/">Home</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/about"> About</Link>
                </div>
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