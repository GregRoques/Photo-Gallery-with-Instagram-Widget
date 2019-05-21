import React from 'react'
import './Design.css'


function Film(props){

    return(
        <div>
            <div className="artDirection">Short Films</div>
            <div className="designFilmText" >
                One of several short films I co-wrote and produced for the <a style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} href='https://www.48hourfilm.com/neworleans' rel="noopener noreferrer" target="_blank">New Orleans 48 Hour Film Project</a>.
            </div>
            <div className="videoAlign">
                <iframe title="The Picture Hunt" width="560" height="315" src="https://www.youtube.com/embed/seAiVYhv3ls" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Film;