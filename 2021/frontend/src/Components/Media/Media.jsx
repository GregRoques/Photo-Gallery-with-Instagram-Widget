import React, { Component } from "react";
import Photography from './Photography';
import Print from './Print';
import Articles from './Articles';
import Film from './Film';
import cssMedia from './media.module.css';
import axios from "axios";
import { grAPI } from "../../Dependencies/BackendAPI";
import ReactHtmlParser from "react-html-parser";


class Media extends Component {
  
    state = {
      testimonial: []
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios.post(`${grAPI}/linkedIn`, {count: 3}).then((res) => {
          const testimonial = res.data;
          this.setState({
            testimonial
          });
        });
      }
    
      Seperator = () =>{
        return (
            <hr style={{ width: "80%", margin: "4rem 10%", color: "black" }} />
        );
      }

      TestimonialDisplay = ({ rec }) => {
        return (
          <div className={cssMedia.testimonialContainer}>
            <hr style={{ width: "80%", margin: "4rem 10%", color: "black" }} />
            <div className={cssMedia.testmonialDisclaimer}>
              via LinkedIn Recommendations
            </div>
            <div className={cssMedia.testimonial}>
              "{ReactHtmlParser(rec.recommendation)}"
            </div>
            <div className={cssMedia.recommender1}>
              –{rec.name}, {rec.title}
            </div>
            <div className={cssMedia.recommender2}>
              (<i>{rec.workedWith}</i>)
            </div>
            <hr style={{ width: "80%", margin: "4rem 10%", color: "black" }} />
          </div>
        );
      };

    render(){
        const { TestimonialDisplay, Seperator } = this;
        const {testimonial} = this.state;
        return(
            <div className={cssMedia.fadeIn} style={{margin: '0 0 10rem 0'}}>
                <div id="writing">
                    <Articles/>
                </div>
                { testimonial.length > 0 ?
                    <TestimonialDisplay rec={testimonial[0]}/> :
                    <Seperator/>
                }
                <div id="photography">
                    <Photography/>
                </div>
                { testimonial.length > 1 ?
                    <TestimonialDisplay rec={testimonial[1]}/> :
                    <Seperator/>
                }
                <div id="design">
                    <Print/>
                </div>
                { testimonial.length > 2 ?
                    <TestimonialDisplay rec={testimonial[2]}/> :
                    <Seperator/>
                }
                <div id="social">
                    <Film/>
                </div>
            </div>
        )
    }
}

export default Media;