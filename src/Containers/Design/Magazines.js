import React, { Component } from 'react'
import './Design.css'

const magList ={
    1:{
        issue: 'Halloween 2015',
        image: 'images/design/mags/mag1.png',
        link: 'https://issuu.com/whereyatnola/docs/wehaa'
    },
    2:{
        issue: 'Winter Holidays 2015',
        image: 'images/design/mags/mag2.png',
        link: 'https://issuu.com/whereyatnola/docs/holiday_dining_guide_2015'
    },
    3:{
        issue: 'Halloween 2014',
        image: 'images/design/mags/mag3.png',
        link: 'https://issuu.com/whereyatnola/docs/voodoo_issue'
    },
    4:{
        issue: 'Spring Restaurant Guide 2016',
        image: 'images/design/mags/mag4.png',
        link: 'https://issuu.com/whereyatnola/docs/issu_cc74bac7c48a1e'
    },
}

const IssueList = ({mag}) => {
    console.log(mag)
    return(
        <div className='magContainers'>
            <div className="mags"> <img src={magList[mag]['image']}/>
                <div className="imgDescription">{magList[mag]['issue']}</div>
            </div>
        </div>
    )

}

function Magazines(props){

    return(
        <div>
            <div class="col-12 artDirection">Art Direction</div>
            <div className='magRows'>
                {(Object.keys(magList)).map(num => {
                            return(
                            <IssueList
                            mag={num}
                            />
                            )
                        })}

            </div>
        </div>
    )
}

export default Magazines;