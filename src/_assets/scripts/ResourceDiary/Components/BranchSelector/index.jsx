import React, {useState} from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const BranchSelector = ({setBranch, branches, selectedBranch}) => {
  const navigate = useNavigate();
  const [branchSelectorOpen, setBranchSelectorOpen] = useState(false);
  const [newBranch, setNewBranch] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const updateBranch = newBranch => {
    if(newBranch.value === '' || newBranch.value === null) {
      setErrorMessage('Please choose a branch')
      return false;
    }

    setBranch(newBranch);
    setErrorMessage(null);
    setBranchSelectorOpen(false);
    navigate("/default-hours");
  }

  return (
    <div className="ch-bg--grey-2 ch-pv--5 br-branch-container ch-mb--4">
      <div className="ch-container">
        <div className="ch-display--flex ch-align-items--center">
          <h2 className="ch-mb--0">{selectedBranch ? selectedBranch.name : "Arnold Clark Hillington"}</h2> 
          <button className="ch-btn ch-btn--link ch-ml--2" onClick={() => setBranchSelectorOpen(!branchSelectorOpen)}>
            {branchSelectorOpen ? 'Cancel' : 'Change branch'}
          </button>
        </div>
        {branchSelectorOpen && (
          <div className="br-branch-picker ch-mt--2">
            <div className={classNames('ch-form__group ch-mb--0', errorMessage && 'ch-form__group--error')}>
              <span className="ch-form__control-validation">{errorMessage}</span>
              <select id="branch" name="branch" className="ch-form__control ch-mb--2 ch-width--4" onChange={(e) => setNewBranch(e.target)}>
                <option value="">Choose a branch</option>
                { branches.map((branch) => (
                  <option selected={selectedBranch && branch.id === selectedBranch.id} id={branch.id} value={branch.id}>{branch.name}</option>
                ))}
              </select>
            </div>
            <button className="ch-btn ch-btn--success ch-mr--2" onClick={() => updateBranch(newBranch)}>Change branch</button>
            <button className="ch-btn" onClick={() => setBranchSelectorOpen(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BranchSelector;