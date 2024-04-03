import React, { useState } from 'react';
import Modal from '../../Components/Modal';
import classNames from 'classnames';

const EditHours = ({close, editHours, editRtsCode, updateDefaultHours}) => {
  const [hours, setHours] = useState(editHours)
  const handleHoursChange = (day, newValue) => {
    let hoursCopy = [...hours];

    hoursCopy.forEach((hour, index) => {
      if(hour.day === day) {
        hours[index].time = newValue === "" ? null : newValue
      }
    })

    setHours(hoursCopy);
  }

  return (
    <Modal close={close} title="Edit resource">
      <div className="ch-modal__body ch-pa--4 ch-bg--grey-1">
        <h3>{editRtsCode} resource</h3>
  
        <div className="ch-display--flex">
          {editHours.map((hour, index) => (
            <div className={classNames(`ch-form__group`, index != 0 && `ch-ml--2`)}>
              <label for={hour.day} className="ch-form__label">{hour.day}</label>
              <input type="number" step=".1" defaultValue={hour.time} className="ch-form__control" onChange={(e) => handleHoursChange(hour.day, e.target.value)} />
            </div>
          ))}
        </div>
        
      </div>
      <div className="ch-modal__footer ch-pa--4">
        <button className="ch-btn ch-btn--success" type="button" onClick={() => updateDefaultHours(hours, editRtsCode)}>Continue</button>
      </div>
    </Modal>
  );
}

export default EditHours;