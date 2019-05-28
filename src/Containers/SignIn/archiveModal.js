import React from "react";
import update from './update.module.css'

const ArchiveModal = props => {
console.log(props.show)
    const cssClasses = [
        update.backdrop,
        props.show === 'true' ? update.backdropOpen : update.backdropClosed,
        update.Modal,
        props.show === 'true' ? update.ModalOpen : update.ModalClosed
    ];

  return (
    <div className={cssClasses.join(' ')}>
        <h1>Archives</h1>
        <button className="Button" onClick={props.closed}>
            Close
        </button>
    </div>
  );
};

export default ArchiveModal;
