import React from 'react'
import './BlogEntries.css'

const Welcome = (props) =>{
    return(
        <div className="blogEntryContainer">
            <h1 className="blogEntryHeader">Welcome to my First Post</h1>
            <h3 className="blogEntryDate">April 16, 2019</h3>
            <div className="blogEntryParagraph">
                <p>
                    Thanks for stopping by my revamped website. I am going to keep this brief (particularly as this post began as lorem ipsum filler for this layout), however I would like to invite you to check back in the coming weeks as I plan to post regularly about new projects I am working on and lessons learned in the fields of front-end development and graphic design.
                </p>
                <p>
                    In the meantime, you can check out my GitHub <a target="_blank" rel="noopener noreferrer" href='https://github.com/GregRoques/Portfolio-Take-2/blob/master/README.md'>Read Me</a> for this site to learn about some of the challenges I encountered building this website and the solutions I devised. I hope this may be helpful to you.
                </p>
                <p>
                    Till next time. <i>– G</i>
                </p>

            </div>
        </div>

    )
}

export default Welcome;