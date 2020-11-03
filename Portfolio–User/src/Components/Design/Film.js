import React from 'react';
import './Design.css';

const Film = () => {
    return(
        <div>
            <div className="artDirection">Short Films</div>
            <div className="designFilmText" >
                One of <a href='https://www.imdb.com/name/nm5480072/?ref_=nv_sr_1?ref_=nv_sr_1' rel="noopener noreferrer" target="_blank">several short films</a> I co-wrote for the New Orleans 48 Hour Film Project.
            </div>
            <div className="videoAlign">
                <iframe title="The Picture Hunt" width="560" height="315" src="https://www.youtube.com/embed/seAiVYhv3ls" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default Film;