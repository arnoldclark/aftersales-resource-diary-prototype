import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Menu = ({activePage}) => {

  return (
    <div className="ch-bg--white ch-rounded ch-shadow--lg ch-pv--4 ch-ph--3 ch-ba--1 ch-bc--grey-3">
      <ul className="br-menu">
        <li className="br-menu__item br-menu__item--active">
          <Link to={`/default-hours`} 
            className={classNames(`ch-rounded ch-fs--3 ch-pa--2 ch-display--block ch-text-decoration--none ch-color--ac-black`, activePage === "defaultHours" && `ch-text--bold ch-bg--grey-3`)}>
            Default resource
          </Link>
        </li>
        <li className="br-menu__item">
          <Link to={`/override-hours`}
            className={classNames(`ch-rounded ch-fs--3 ch-pa--2 ch-display--block ch-text-decoration--none ch-color--ac-black`, activePage === "overrideHours" && `ch-text--bold ch-bg--grey-3`)}>
            Override resource
          </Link>
        </li>
        <li className="br-menu__item">
          <Link to={`/mot-slots`}
            className={classNames(`ch-rounded ch-fs--3 ch-pa--2 ch-display--block ch-text-decoration--none ch-color--ac-black`, activePage === "motSlots" && `ch-text--bold ch-bg--grey-3`)}>
            MOT resource
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu;