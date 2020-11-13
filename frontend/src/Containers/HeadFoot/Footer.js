import React, {Component} from "react";
import "./HeadFoot.css";
import ResumeModal from './ResumeModal';
import { Footer, LinkedIn, GitHub, Resume, Insta} from './FooterLinks'


class Footer extends Component{

    state ={
        email: false
    }

    componentDidMount(){
        const isMedia = window.location.pathname === "/print" || window.location.pathname.includes("/photography");
        this.setState({
            isMedia: isMedia
        })
    }

    toggleEmail=()=>{
        const doesShow = this.state.email
        this.setState({email: !doesShow})
    }
    
    render(){
        const { email, isMedia } = this.state;
        return(
            <div>
                <ResumeModal
                    isShown={email}
                    close= {this.toggleEmail}
                /> 
                <div className="footer">
                    {!isMedia ?
                        <>
                            <Contact 
                                isEmailToggled={this.toggleEmail}
                                isShown={email}
                            />
                            <LinkedIn/>
                            <GitHub/>
                            <Resume/>
                        </> :
                        <>
                            <Contact 
                                isEmailToggled={this.toggleEmail}
                                isShown={email}
                            />
                            <Insta/>
                        </> 
                    }
                </div>
            </div>
        )
    }
}

export default Footer;