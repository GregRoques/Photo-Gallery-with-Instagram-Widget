import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import Film from './Film'
import "./Design.css";

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

class Design extends Component{
    state ={
        isDisplayed: "mag"
    }

    componentDidMount() {
        this.props.Header("Media Samples");
        window.scrollTo(0, 0);
    }

    onChangeHandler = e => {
        const { value } = e.target;
        this.setState({
            isDisplayed: value,
        });
      };


    render(){
        const {isDisplayed} = this.state;
        const {onChangeHandler} = this;
        return(
            <div className="fadeIn">
                <div className="selectBarContainer">
                    <select
                        className="selectBar"
                        onChange={onChangeHandler}
                    >
                        <option value="" disabled selected>
                            -- Select --
                            </option>
                        <option value="mag">
                            Art Direction
                        </option>
                        <option value="photo">
                            Photography
                        </option>
                        <option value="articles">
                            Writing
                        </option>
                        <option value="film">
                            Short Film
                        </option>
                    </select>
                </div>
                { isDisplayed === "mag" ? <Magazines/> : ""}
                { isDisplayed === "photo" ? <Photography/> : ""}
                { isDisplayed === "articles" ? <Articles/> : ""}
                { isDisplayed === "film" ? <Film/> : ""}
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