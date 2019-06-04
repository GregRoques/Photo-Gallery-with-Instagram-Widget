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
                <div key={i} className="previousMargin" onClick={()=>props.updateArticle(post)}>
                    <span className="arrowColor">></span> <span className="selectPreviousHover"><b><i className="titleColor">{props.articles[post].date}</i></b></span>
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
