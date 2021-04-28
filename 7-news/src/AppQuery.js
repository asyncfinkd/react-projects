import React, { useState } from "react";
import Modal from "./Modal";

export default function AppQuery({ id, title, image, category, time, modalTitle, author }) {
  const [showModal, setShowModal] = useState(false);
return (
  <>
  {showModal && (
    <>
      <Modal closeModal={() => setShowModal(false)} image={image} title={title} author={author} category={category} time={time} modalTitle={modalTitle} />
    </>
  )}
          <div className="info-child" key={id} onClick={() => setShowModal(!showModal)}>
            <section className="info-section">
              <div className="info-thumbnail">
                <img src={image} className="info-image" alt={title} />
              </div>
              <div className="info-linker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 54 54"
                  fill="currentColor"
                  id="play"
                >
                  <path d="M27 2C13.193 2 2 13.193 2 27s11.193 25 25 25 25-11.193 25-25S40.807 2 27 2zm9.775 26.82l-13.698 7.909c-1.401.809-3.152-.202-3.152-1.82V19.091c0-1.617 1.751-2.628 3.152-1.82l13.698 7.909c1.4.809 1.4 2.831 0 3.64z"></path>
                </svg>
              </div>
              <div className="info-textAndTitle">
                <div className="info-category">
                  <span className="info-item-category">{category}</span>
                  <span className="info-item-time">{time}</span>
                </div>
                <div className="info-text">{title}</div>
              </div>
            </section>
          </div>
        </>
);
}
