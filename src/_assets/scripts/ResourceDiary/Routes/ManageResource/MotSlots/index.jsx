import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../../Components/Menu';
import BranchSelector from '../../../Components/BranchSelector';
import Toast from '../../../Components/Toast';
import Header from '../../../Components/Header';

const MotSlots = ({setBranch, selectedBranch, branches, motResource, updateMotResource, toast, removeToast}) => {
  const location = useLocation();
  const [firstSlot, setFirstSlot] = useState(motResource.firstSlot);
  const [lastSlot, setLastSlot] = useState(motResource.lastSlot);
  const [resource, setResource] = useState(motResource.resource);

  useEffect(() => {
    removeToast()
  }, [location]);

  return (
    <>
      <Header active="manage-resource" />
      <BranchSelector setBranch={setBranch} selectedBranch={selectedBranch} branches={branches} />

      <div className="ch-container">
        <div className="ch-row">
          <div className="md:ch-col--4">
            <Menu activePage="motSlots" />
          </div>
          <div className="md:ch-col--8">
            <h2>MOT resource</h2>

            { toast && (
              <Toast className="ch-mb--2">
                {toast}
              </Toast>
            )}

            <form>
              <div className="ch-row">
                <div className="md:ch-col--4">
                  <div className="ch-form__group">
                    <label for="firstSlot">First slot</label>
                    <select name="firstSlot" id="firstSlot" className="ch-form__control" defaultValue={motResource.firstSlot} onChange={(e) => setFirstSlot(e.target.value)}>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                    </select>
                  </div>
                </div>
                <div className="md:ch-col--4">
                  <div className="ch-form__group">
                    <label for="lastSlot">Last slot</label>
                    <select name="lastSlot" id="lastSlot" className="ch-form__control" defaultValue={motResource.lastSlot} onChange={(e) => setLastSlot(e.target.value)}>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="ch-width--2">
                <div className="ch-form__group">
                  <label for="resource">Resource</label>
                  <input type="text" name="resource" id="resource" className="ch-form__control" defaultValue={motResource.resource} onChange={(e) => setResource(e.target.value)} />
                </div>
              </div>

              <button type="button" className="ch-btn ch-btn--success" onClick={() => updateMotResource(firstSlot, lastSlot, resource)}>Update MOT resource</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default MotSlots;