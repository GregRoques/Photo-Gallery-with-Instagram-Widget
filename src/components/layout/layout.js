import React from 'react';

import "./Layout.css";
import Header from "../../Containers/HeadFoot/Header";
import Footer from "../../Containers/HeadFoot/Footer";
import Aux from "../../HOC/Aux";

function Layout(props){
    return(
        <Aux>
            <Header/>
                <div>
                    {props.children}
                </div>
            <Footer/>
        </Aux>
    )
}

export default Layout;