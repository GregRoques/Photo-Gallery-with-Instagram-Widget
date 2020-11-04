import React, {Component} from "react";
import "./HeadFoot.css";
import ResumeModal from './ResumeModal';
import { Footer, LinkedIn, GitHub, Resume} from './FooterLinks'


class Footer extends Component{

    state ={
        email: false
    }

    componentDidMount(){
        const isMedia = window.location.pathname === "/media" || window.location.pathname.includes("/photography");
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
                    <Contact 
                        isEmailToggled={this.toggleEmail}
                        isShown={email}
                    />
                    {!isMedia ?
                        <>
                            <LinkedIn/>
                            <GitHub/>
                            <Resume/>
                        </> :
                            ""
                    }
                </div>
            </div>
        )
    }
}

export default Footer;