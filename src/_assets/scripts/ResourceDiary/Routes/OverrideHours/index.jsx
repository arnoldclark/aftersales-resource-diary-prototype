import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../Components/Menu';
import BranchSelector from '../../Components/BranchSelector';
import classNames from 'classnames';
import formatTime from '../../Utilities/FormatTime';
import Toast from '../../Components/Toast';

const OverrideHours = ({setBranch, selectedBranch, branches, createOverride, deleteOverride, activeOverrides, toast, removeToast}) => {
  const location = useLocation();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [overrideHours, setOverrideHours] = useState([
    {
      name: "Labour",
      value: ""
    },
    {
      name: "MOT",
      value: "",
    },
    {
      name: "Service",
      value: "",
    },
    {
      name: "Sales",
      value: ""
    },
    {
      name: "Collect",
      value: ""
    },
    {
      name: "Waiting",
      value: ""
    },
    {
      name: "Warranty",
      value: ""
    },
    {
      name: "UCW",
      value: ""
    }
  ]);
  const overrideForm = useRef(null);

  const [errorMessages, setErrorMessages] = useState({
    startDate: null,
    endDate: null,
    override: null
  })

  const updateOverrideHours = (name, value) => {
    let overrideHoursCopy = [...overrideHours];

    overrideHoursCopy.forEach((override, index) => {
      if(override.name === name) {
        overrideHours[index].value = value === "" ? null : value
      }
    })

    setOverrideHours(overrideHoursCopy);
  }

  const handleOverride = () => {
    if(!startDate) {
      return setErrorMessages({
        startDate: "Please specify a start date for the override"
      });
    }
    
    if(!endDate) {
      return setErrorMessages({
        endDate: "Please specify an end date for the override"
      })
    }

    if(overrideHours.filter(override => override.value != null).length < 1) {
      return setErrorMessages({
        override: "Please specify at least one override"
      });
    }

    overrideForm.current?.reset();
    setOverrideHours([
      {
        name: "Labour",
        value: ""
      },
      {
        name: "MOT",
        value: "",
      },
      {
        name: "Service",
        value: "",
      },
      {
        name: "Sales",
        value: ""
      },
      {
        name: "Collect",
        value: ""
      },
      {
        name: "Waiting",
        value: ""
      },
      {
        name: "Warranty",
        value: ""
      },
      {
        name: "UCW",
        value: ""
      }
    ]);
    setStartDate("");
    setEndDate("");
    setErrorMessages({
      startDate: null,
      endDate: null,
      override: null
    });
    createOverride(startDate, endDate, overrideHours);
  }

  const dateSuffix = day => {
    return day > 0
    ? ["th", "st", "nd", "rd"][
        (day > 3 && day < 21) || day % 10 > 3 ? 0 : day % 10
      ]
    : "";
  }

  const formatDate = date => {
    const unixTimestamp = Date.parse(date);
    const dateObj = new Date(unixTimestamp);

    const day = dateObj.getDate();
    const weekday = dateObj.toLocaleString("default", { weekday: "long" })
    const month = dateObj.toLocaleString("default", { month: "long" });
    
    const formattedDate = `${weekday} ${day}${dateSuffix(day)} ${month}`;

    return formattedDate;
  }

  useEffect(() => {
    removeToast()
  }, [location]);

  return (
    <>
      <BranchSelector setBranch={setBranch} selectedBranch={selectedBranch} branches={branches} />

      <div className="ch-container">
        <div className="ch-row">
          <div className="md:ch-col--4">
            <Menu activePage="overrideHours" />
          </div>
          <div className="md:ch-col--8">
            <h2>Override resource</h2>

            { toast && (
              <Toast className="ch-mb--2">
                {toast}
              </Toast>
            )}

            { (errorMessages.startDate || errorMessages.endDate || errorMessages.override) && (
              <div className="ch-alert ch-alert--danger ch-mb--2">
                { errorMessages.startDate || errorMessages.endDate || errorMessages.override }
              </div>
            )}

            <form ref={overrideForm}>
              <div className="ch-row">
                <div className="md:ch-col--4">
                  <div className={classNames('ch-form__group', errorMessages.startDate && 'ch-form__group--error' )}>
                    <label htmlFor="startdate">Start date</label>
                    <input type="date" className="ch-form__control" name="startdate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                  </div>
                </div>
                <div className="md:ch-col--4">
                  <div className={classNames('ch-form__group', errorMessages.endDate && 'ch-form__group--error' )}>
                    <label htmlFor="startdate">End date</label>
                    <input type="date" className="ch-form__control" name="enddate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                  </div>
                </div>
              </div>
                
              <div className={classNames('ch-form__group ch-display--flex ch-mt--2 ch-mb--2', errorMessages.override && 'ch-form__group--error' )}>
                <div className="ch-mr--1">
                  <label htmlFor="labour">Labour</label>
                  <input id="labour" type="number" value={overrideHours[0].value} className="ch-form__control" name="labour" onChange={(e) => updateOverrideHours("Labour", e.target.value)} />
                </div>
                <div className="ch-mr--1 ch-ml--1">
                  <label htmlFor="mot">MOT</label>
                  <input id="mot" type="number" value={overrideHours[1].value} className="ch-form__control" name="mot" onChange={(e) => updateOverrideHours("MOT", e.target.value)} />
                </div>
                <div className="ch-mr--1 ch-ml--1">
                  <label htmlFor="service">Service</label>
                  <input id="service" type="number" value={overrideHours[2].value} className="ch-form__control" name="service" onChange={(e) => updateOverrideHours("Service", e.target.value)} />
                </div>
                <div className="ch-mr--1 ch-ml--1">
                  <label htmlFor="sales">Sales</label>
                  <input id="sales" type="number" value={overrideHours[3].value} className="ch-form__control" name="sales" onChange={(e) => updateOverrideHours("Sales", e.target.value)} />
                </div>
                <div className="ch-mr--1 ch-ml--1">
                  <label htmlFor="collect">Collect</label>
                  <input id="collect" type="number" value={overrideHours[4].value} className="ch-form__control" name="collect" onChange={(e) => updateOverrideHours("Collect", e.target.value)} />
                </div>
                <div className="ch-mr--1 ch-ml--1">
                  <label htmlFor="waiting">Waiting</label>
                  <input id="waiting" type="number" value={overrideHours[5].value} className="ch-form__control" name="waiting" onChange={(e) => updateOverrideHours("Waiting", e.target.value)} />
                </div>
                <div className="ch-mr--1 ch-ml--1">
                  <label htmlFor="warranty">Warranty</label>
                  <input id="warranty" type="number" value={overrideHours[6].value} className="ch-form__control" name="warranty" onChange={(e) => updateOverrideHours("Warranty", e.target.value)} />
                </div>
                <div className="ch-ml--1">
                  <label htmlFor="ucw">UCW</label>
                  <input id="ucw" type="number" value={overrideHours[7].value} className="ch-form__control" name="ucw" onChange={(e) => updateOverrideHours("UCW", e.target.value)} />
                </div>
              </div>

              <button type="button" className="ch-btn ch-btn--success" onClick={() => handleOverride()}>Apply override</button>
            </form>

            <hr className="ch-mv--5 ch-bg--grey-3" />

            <div>
              <h3>Active overrides</h3>

              { activeOverrides.length > 0 ? (
                activeOverrides.map((override, index) => (
                  <div key={index} className="ch-bg--white ch-rounded ch-shadow--lg ch-pv--4 ch-ph--3 ch-ba--1 ch-bc--grey-3 ch-mb--3">
                    <h3>{formatDate(override.startDate)} - {formatDate(override.endDate)}</h3>
                    <table className="ch-table ch-table--striped ch-table--compact ch-table--bordered ch-width--12">
                      <thead>
                        <tr>
                          <th className="ch-width--3"></th>
                          { override.hours.map((hour, index) => (
                            hour.value != null && (
                              <th key={index}>{hour.name}</th>
                            )
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="ch-bg--grey-2 ch-text--left">Override</th>
                          { override.hours.map((hour, index) => (
                            hour.value != null && (
                              <td key={index}>{formatTime(hour.value)}</td>
                            )
                          ))}
                        </tr>
                      </tbody>
                    </table>

                    <hr className="ch-bg--grey-3 ch-mv--4" />

                    <button type="button" className="ch-btn ch-btn--sm ch-color--ac-red" onClick={() => deleteOverride(index)}>Delete override</button>
                  </div>
                ))
              ) : (
                <p>There are currently no active overrides</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OverrideHours;