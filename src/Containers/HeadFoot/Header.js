import React, {Component} from "react";
import { Link }  from 'react-router-dom';
import "./HeadFoot.css"

import {connect} from 'react-redux';



class Header extends Component{ 

    state ={
        title: `<!--${this.props.currentHeader}-->`
    }


    componentWillReceiveProps = nextProps =>{
        if(this.props.currentHeader !== nextProps.currentHeader){
            this.setState({
                title: `<!--${nextProps.currentHeader}-->`
            })
        }
    }

    render(){
        return(
            <div className="header">
                <Link style={{ textDecoration: 'none' }} to="/"><div title="Home Page" className="leftNav">Greg Roques</div></Link>

                <div className ="rightNav">
                    <div className='typeTitle'>
                        {this.state.title}
                    </div>
                </div>
                
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        currentHeader: state.header
    }
}

export default connect(mapStateToProps) (Header);