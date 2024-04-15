import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import BranchSelector from '../../../Components/BranchSelector';
import Menu from '../../../Components/Menu';
import EditHours from '../../../Modals/EditHours';
import formatTime from '../../../Utilities/FormatTime';
import Toast from '../../../Components/Toast';
import Header from '../../../Components/Header';

const DefaultHours = ({selectedBranch, branches, setBranch, defaultHours, modalIsOpen, openModal, closeModal, updateDefaultHours, toast, removeToast}) => {
  const location = useLocation();
  const [editHours, setEditHours] = useState(null);

  const handleEdit = (hours, rtsCode) => {
    setEditHours({
      rtsCode,
      hours
    });
    openModal();
  }

  useEffect(() => {
    removeToast()
  }, [location]);

  return (
    <>
      { modalIsOpen && 
        <EditHours close={closeModal} editHours={editHours.hours} editRtsCode={editHours.rtsCode} updateDefaultHours={updateDefaultHours} /> }
      <Header active="manage-resource" />
      <BranchSelector setBranch={setBranch} selectedBranch={selectedBranch} branches={branches} />

      <div className="ch-container">
        <div className="ch-row">
          <div className="md:ch-col--4">
            <Menu activePage="defaultHours" />
          </div>
          <div className="md:ch-col--8">
            <h2>Default resource</h2>

            { toast && (
              <Toast className="ch-mb--2">
                The default hours were successfully updated
              </Toast>
            )}

            <table className="ch-table ch-table--bordered ch-width--12 ch-table--striped">
              <thead>
                <tr>
                  <th></th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sun</th>
                  <th></th>
                </tr>
              </thead>
              {
                defaultHours.map((line) => (
                  <tr>
                    <th className="ch-bg--grey-2 ch-text--left">{line.name}</th>
                    { line.hours.map((hours) => (
                      <td>{ formatTime(hours.time) }</td>
                    )) }
                    <td><button type="button" className="ch-btn ch-btn--link ch-fs--2" onClick={() => handleEdit(line.hours, line.name)}>Edit</button></td>
                  </tr>
                ))
              }
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultHours;