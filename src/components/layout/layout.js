import React from 'react';
import {connect} from "react-redux"
import "./Layout.css";
import Header from "../../Containers/HeadFoot/Header";
import Footer from "../../Containers/HeadFoot/Footer";
import Aux from "../../HOC/Aux";

function Layout(props){
    return(
        <Aux>
            <Header header={props.header}/>
                <div className="contentMargin">
                    {props.children}
                </div>
            <Footer/>
        </Aux>
    )
}

function mapStateToProps({header}){
    return {
        header
    }
}
export default connect(mapStateToProps, {})(Layout);