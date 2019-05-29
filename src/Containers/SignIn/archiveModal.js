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
        <button className="Button" onClick={props.closed}>
            Close
        </button>
    </div>
  );
};

export default ArchiveModal;
