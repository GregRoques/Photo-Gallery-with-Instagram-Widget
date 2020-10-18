import React from 'react';
import "./Layout.css";
import Header from "./HeaderHeader";

import Aux from "./Aux";

function Layout(props){
    return(
        <div className="layoutBody">
        <Aux>
            <Header/>
                <div className="contentMargin fadeIn">
                    {props.children}
                </div>
        </Aux>
        </div>
    )
}

export default Layout;