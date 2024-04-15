import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Index = ({branches, setBranch, removeToast}) => {
  const location = useLocation();

  useEffect(() => {
    removeToast()
  }, [location]);
  
  return (
    <div className="ch-container">
      <div className="ch-bg--white ch-rounded ch-shadow--lg ch-pv--6 ch-ph--6 ch-text--center ch-width--5 ch-centered ch-mt--10 ch-ba--1 ch-bc--grey-3">
        <h2 className="ch-mb--4">Choose a branch</h2>
        <select name="branches" className="ch-form__control ch-mb--2" onChange={(e) => setBranch(e.target)}>
          <option value="">Choose a branch</option>
          { branches.map((branch) => (
            <option id={branch.id} value={branch.id}>{branch.name}</option>
          ))}
        </select>
        <Link to={`/manage-resource/default-hours`} className="ch-btn ch-btn--block ch-btn--success">Continue</Link>
      </div>
    </div>
  )
}

export default Index;