import React from 'react';

const Modal = (props) => (
  <div className="ch-modal-wrapper">
    <div className="ch-mask" onClick={() => props.close()}></div>
    <div className="ch-modal ch-width--8">
      <div className="ch-modal__header ch-pa--4">
        <h1 className="ch-fs--5 ch-mb--0">{props.title}</h1>
        <button className="ch-modal__close" type="button" onClick={() => props.close()}>
          <span className="ch-reader">Close</span>
        </button>
      </div>
      { props.children }
    </div>
  </div>
)

export default Modal;