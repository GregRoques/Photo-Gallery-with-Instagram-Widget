import React from "react";
import update from './update.module.css'

const ArchiveModal = props => {

    const cssModal = [
        update.Modal,
        props.show ? update.ModalOpen : update.ModalClosed
    ];

  return (
    <div className={cssModal.join(' ')}>
        <h1>Archives</h1>
        {Object.keys(props.articles).reverse().map((post,i)=> {
            return(
                <div key={i} className="previousMargin" >
                    <span className="selectPreviousHover titleColor" onClick={()=>props.updateArticle(post)}>
                      <b><i>{props.articles[post].date}</i></b> 
                    </span>
                    <span onClick={()=>props.existingDelete(post)} className="selectPreviousHover titleColor">DELETE</span>

                </div>
            )
        })}
        <button className="Button" onClick={props.closed}>
            Close
        </button>
    </div>
  );
};

export default ArchiveModal;
