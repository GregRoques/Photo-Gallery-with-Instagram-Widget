import React from "react";
import update from './update.module.css'

const ArchiveModal = props => {

    const cssModal = [
        update.Modal,
        props.show ? update.ModalOpen : update.ModalClosed
    ];

  return (
    <div className={cssModal.join(' ')}>
        <h1 className={update.archiveTitle}>Archives</h1>
        {Object.keys(props.articles).reverse().map((post,i)=> {
            return(
                <div key={i}>
                    <span className={update.oldArticle} onClick={()=>props.updateArticle(post)}>
                        {props.articles[post].date}
                    </span>
                    <span className={update.deleteButton} onClick={()=>props.existingDelete(post)}>DELETE</span>
                </div>
            )
        })}
        <button className={update.closeButton} onClick={props.closed}>
            Close
        </button>
    </div>
  );
};

export default ArchiveModal;
