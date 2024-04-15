import React, {useEffect, useState} from 'react';
import Header from '../../Components/Header';
import BranchSelector from '../../Components/BranchSelector';
import classNames from 'classnames';

const ResourceDiaryView = ({branches, selectedBranch, setBranch, defaultHours, resourceHours, activeOverrides}) => {
  const startDate = new Date("04/08/2024");
  const endDate = new Date("05/05/2024");
  const [dates, setDates] = useState([]);

  useEffect(() => {
    let datesArray = [];

    while(startDate <= endDate) {
      datesArray.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);

      setDates(datesArray);
    }
  }, []);

  const formatDate = date => {
    const unixTimestamp = Date.parse(date);
    const dateObj = new Date(unixTimestamp);

    const day = dateObj.getDate();
    const weekday = dateObj.toLocaleString("default", { weekday: "short" })
    const month = dateObj.toLocaleString("default", { month: "2-digit" });
    
    // const formattedDate = `<span className="ch-display--block">${weekday}</span>${day}/${month}`;

    return (
      <span className="ch-fs--1">
        <span className="ch-display--block ch-text--center">{weekday}</span>
        <span className="ch-display--block ch-text--center">{day}/{month}</span>
      </span>
    );
  }

  const renderDates = () => {
    return dates.map((date, index) => (
      <th width="70px">{formatDate(date)}</th>
    ))
  }

  const highlightResource = (booked, resource) => {
    const percentage = (100 * booked) / resource;

    if(percentage >= 50 && percentage < 100) {
      return `ch-color--white ch-bg--ac-orange ch-text--bold`;
    }

    if(percentage >= 100) {
      return `ch-color--white ch-bg--ac-red ch-text--bold`
    }

    // return `ch-ba--1 ch-bc--grey-4`
  }

  const renderHours = () => {
    return resourceHours.map((resource, index) => (
      <tr key={resource.id}>
        <th className="ch-bg--grey-2 ch-text--left">{resource.name}</th>
          {resource.hours.map((hour, hourIndex) => (
            <td key={hourIndex} className={classNames(`ch-text--center`, highlightResource(hour.booked, hour.resource))}>{hour.booked}/{hour.resource}</td>
          ))}
      </tr>
    ));
  }

  const calendar = document.querySelector('.br-calendar');
  const calendarTable = document.querySelector('.br-calendar table');
  const calendarStickyColumn = document.querySelector('.br-calendar table thead th');

  const nextTwoWeeks = () => {
    console.log("Next two weeks", calendar, calendarTable.scrollWidth, calendarStickyColumn)
    calendar.scrollTo({
      left: 980,
      behavior: 'smooth'
    })
  }

  const previousTwoWeeks = () => {
    console.log("Prevous two weeks", calendar)
    calendar.scrollTo({
      left: -980,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Header active="resource-diary" />
      <BranchSelector setBranch={setBranch} selectedBranch={selectedBranch} branches={branches} />

      <div className="ch-container">
        <div className="ch-row">
          <div className="md:ch-col--12">
            <div className="ch-ba--1 ch-bc--grey-3 ch-rounded--lg ch-shadow--lg ch-bg--white">
              <div className="ch-pa--3 ch-bb--1 ch-bc--grey-3">
                <h2>Resource diary</h2>

                <div className="ch-display--flex ch-justify-content--between ch-align-items--center">
                  <span className="ch-fs--3">Showing two weeks from Mon 08/04/2024 to Sun 21/04/2024</span>
                  <div className="ch-display--flex">
                    <button type="button" className="ch-btn ch-btn--sm ch-mr--2" onClick={() => previousTwoWeeks()}>Previous two weeks</button>
                    <button type="button" className="ch-btn ch-btn--sm" onClick={() => nextTwoWeeks()}>Next two weeks</button>
                  </div>
                </div>
              </div>

              <div className="br-calendar">
                <table className="ch-table ">
                  <thead>
                    <th width="190px" className="ch-text--left ch-bg--grey-2">Resource</th>
                    { renderDates() }
                  </thead>
                  <tbody>
                    {renderHours()}
                  </tbody>
                </table>
              </div>

              <div className="ch-pa--3 ch-bc--grey-3 ch-display--flex ch-justify-content--between ch-align-items--center">
                <span className="ch-fs--3">Showing two weeks from Mon 08/04/2024 to Sun 21/04/2024</span>
                <div className="ch-display--flex">
                  <button type="button" className="ch-btn ch-btn--sm ch-mr--2" onClick={() => previousTwoWeeks()}>Previous two weeks</button>
                  <button type="button" className="ch-btn ch-btn--sm" onClick={() => nextTwoWeeks()}>Next two weeks</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResourceDiaryView;