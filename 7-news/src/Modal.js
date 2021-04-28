import React from 'react';

export default function Modal({closeModal, image, title, category, time, modalTitle, author}) {
  return(
    <>
      <div className="modal-container">
        <div className="modal-content">
        <div className="modal-icon" onClick={closeModal}>
          <svg width="16" height="17" fill="none" class="fade-ready svg-icon svg-icon--close-thin" xmlns="http://www.w3.org/2000/svg"><path d="M.762 16.916L0 16.156 15.238.948l.762.76L.762 16.917z" fill="#333"></path><path d="M15.238 16.916L0 1.71l.762-.76L16 16.155l-.762.76z" fill="#333"></path></svg>
        </div>
        <div className="modal-flex">
        <div className="modal-image-header">
          <img src={image} />
        </div>
        <div className="modal-right">
          <h2>{title}</h2>
          <div class="info-category margin-t3">
          <span class="info-item-category font-md lighter">{category}</span>
          <span class="info-item-time font-md lighter">{time}</span>
          </div>
          <div className="modal-author">
          <span>ავტორი:</span> <p>{author}</p>
          </div>
          <div id="modal" className="modal-title">
            <p>{modalTitle}</p>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}
