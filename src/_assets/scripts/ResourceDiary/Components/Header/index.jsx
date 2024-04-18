import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({active}) => {
  return (

    <header class="ch-navbar">
      <div class="ch-container">

        <div className="ch-display--flex">
          <div className="ch-display--flex">
            <a href="/" class="ch-navbar__title ch-mr--4 ch-pr--4 ch-br--1 ch-bc--grey-6">
              <img src="/images/ac-emblem.svg" alt="Arnold Clark" />
              Branch resource
            </a>

            <ul class="ch-navbar__nav ch-pull--left" data-id="ch-navbar-menu">
              <li className={classNames(`ch-mr--1`, active === "manage-resource" && `ch-navbar--active`)}><Link to={`/manage-resource/default-hours`}>Manage Resource</Link></li>
              <li className={classNames(active === "resource-diary" && `ch-navbar--active`)}><Link to={`/resource-diary`}>Resource Diary</Link></li>
            </ul>
          </div>

          <div className="ch-display--flex ch-align-items--center ch-pull--right ch-ml--auto">
            <a href="#" class="ch-navbar__user ch-bg--ac-magenta ch-color--white ch-mv--3 ch-mr--2">FM</a>
            <a href="#" className="ch-link--white">Log out</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;