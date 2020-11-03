import React, { Component } from 'react'
import './Design.css'
import { magList } from '../../Dependencies/Design_Magazine;'

const IssueList = ({mag}) => {
    return(
        <div>
            <a rel="noopener noreferrer" target="_blank" href={magList[mag]['link']} >
                <div className="mags"> <img src={magList[mag]['image']} alt={magList[mag]['issue']}/>
                    <div className="imgDescription"><i>{magList[mag]['issue']}</i></div>
                </div>
            </a>
        </div>
    )
}

class Magazines extends Component{
    state={
        isLoaded: false
    }
    render(){
        return isLoaded ? (
            <div>
                <div className="artDirection">Art Direction</div>
                <div className='magGrid'>
                    {(Object.keys(magList)).map((num,i) => {
                        Object.keys(magList).length === (i+1) ? this.setState({isLoaded: true}) : "";
                        return(
                            <IssueList
                            key={i}
                            mag={num}
                            />
                        )
                    })}

                </div>
            </div>
        ): ""
    }
}

export default Magazines;