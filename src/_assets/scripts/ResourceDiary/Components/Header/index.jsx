import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({active}) => {
  return (
    // <header class="ch-navbar">
    //   <div class="ch-container">
    //     <div class="ch-row">
    //       <div class="xs:ch-col--12 sm:ch-col--3">
    //         <a href="/" class="ch-navbar__title ch-mv--3">
    //           <img src="/images/ac-emblem.svg" alt="Arnold Clark" />
    //           Branch resource
    //         </a>
    //       </div>
    //       <div class="xs:ch-col--12 sm:ch-col--9">
    //         <ul class="ch-navbar__nav ch-pull--left" data-id="ch-navbar-menu">
    //           <li><a href="">Manage Resource</a></li>
    //           <li><a href="">Resource Diary</a></li>
    //         </ul>
    //         <a href="#" class="ch-navbar__user ch-bg--ac-magenta ch-color--white ch-pull--right ch-mv--3">JC</a>
    //       </div>
    //     </div>
    //   </div>
    // </header>

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

          <a href="#" class="ch-navbar__user ch-bg--ac-magenta ch-color--white ch-pull--right ch-mv--3 ch-ml--auto">FM</a>
        </div>
      </div>
    </header>
  )
}

export default Header;