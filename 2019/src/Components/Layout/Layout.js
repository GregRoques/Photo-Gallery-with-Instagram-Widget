import React from "react";
import { connect } from "react-redux";
import "./Layout.css";
import Header from "../../Containers/HeadFoot/Header";
import Footer from "../../Containers/HeadFoot/Footer";
import Aux from "../../HOC/Auxillary";

function Layout(props) {
  return (
    <div className="layoutBody">
      <Aux>
        <Header header={props.header} />
        <div className="contentMargin fadeIn">{props.children}</div>
        <Footer />
      </Aux>
    </div>
  );
}

function mapStateToProps({ header }) {
  return {
    header,
  };
}
export default connect(mapStateToProps, {})(Layout);
