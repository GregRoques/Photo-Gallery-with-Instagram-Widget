import React, { Component } from 'react'
import './Design.css'

const articleList ={
    1:{
        title: '5 Days in Israel',
        category: 'Travel',
        image: 'images/design/articles/israel.jpg',
        link: 'https://www.whereyat.com/a-trip-through-history-five-days-in-israel'
    },
    2:{
        title: 'Marking Down Moscow',
        category: 'Travel',
        image: 'images/design/mags/moscow.jpg',
        link: 'https://www.whereyat.com/marking-down-moscow'
    },
    3:{
        title: 'City Surf Makes Waves on Magazine St.',
        category: 'Fitness',
        image: 'images/design/mags/citySurf.jpg',
        link: 'https://www.whereyat.com/making-waves-on-magazine-stree'
    },
    4:{
        title: 'Dropping the Bass on Indoor Spin',
        category: 'Fitness',
        image: 'images/design/mags/spin.jpg',
        link: 'https://www.whereyat.com/fit-club-cyclebar-drops-the-bass-on-indoor-spin'
    },
    5:{
        title: 'NOLA Street Art 2018',
        category: 'Culture',
        image: 'images/design/mags/streetArt.jpg',
        link: 'https://www.whereyat.com/10-street-artists-murals-whove-given-new'
    },
    6:{
        title: 'Jobs',
        category: 'Film Review',
        image: 'images/design/mags/jobs.jpg',
        link: 'https://www.whereyat.com/jobs'
    },
    7:{
        title: 'Interview with Broken Social Scene',
        category: 'Music Interview',
        image: 'images/design/mags/bss.jpg',
        link: 'https://www.whereyat.com/calming-the-storm-broken-social-scenes-kevin'
    },
    8:{
        title: 'Interview with Big Gigantic',
        category: 'Music Interview',
        image: 'images/design/mags/bigGigantic.jpg',
        link: 'https://www.dropbox.com/s/6qsqdhuperbeprw/big%20gigantic.pdf?dl=0'
    },
}

const IssueList = ({mag}) => {
    console.log(mag)
    return(
        <div className='magContainers'>
            <div className="mags"> <img src={articleList[mag]['image']}/>
                <div className="imgDescription">{articleList[mag]['title']}</div>
            </div>
        </div>
    )

}

function Articles(props){

    return(
        <div>
            <div class="col-12 artDirection">Art Direction</div>
            <div className='magRows'>
                {(Object.keys(articleList)).map(num => {
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

export default Articles;