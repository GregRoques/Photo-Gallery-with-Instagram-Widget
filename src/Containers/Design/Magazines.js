import React from 'react'
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
    return(
        <div className='magContainers'>
            <a rel="noopener noreferrer" target="_blank" href={magList[mag]['link']} >
                <div className="mags"> <img src={magList[mag]['image']} alt={magList[mag]['issue']}/>
                    <div className="imgDescription"><i>{magList[mag]['issue']}</i></div>
                </div>
            </a>
        </div>
    )

}

function Magazines(props){

    return(
        <div>
            <div className="artDirection">Art Direction</div>
            <div className='magRows'>
                {(Object.keys(magList)).map((num,i) => {
                            return(
                            <IssueList
                            key={i}
                            mag={num}
                            />
                            )
                        })}

            </div>
        </div>
    )
}

export default Magazines;