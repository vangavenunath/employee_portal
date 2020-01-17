import React, { useState } from 'react';
import axios from 'axios';
import AutoCompleteEmployee from '../AutoCompleteEmployee'
import Navigation from '../Navigation/Navigation'
import '../EmployeeHome/EmployeeHome.scss';


const EmployeeHome = (() => {
  const [empFormDetails, setEmpFormDetails] = useState({ EmployeeName: '', TaskName: '', })
  const [toggleButton, setToggleButton] = useState(false)

  const setKeyValue = (key, val) => setEmpFormDetails({
    ...empFormDetails,
    [key]: [val],
  });

  const handleClockIn = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/v1/employee_log/' + empFormDetails.EmployeeName,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => console.log(response.data))
      .then(() => { setToggleButton(true) })
  }

  const handleClockOut = () => {
    axios({
      method: 'PUT',
      url: 'http://localhost:5000/api/v1/employee_log/' + empFormDetails.EmployeeName,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => console.log(response.data))
      .then(() => { setToggleButton(false) })
  }

  const setToggleInOut = (value) => {
    setToggleButton(value)
  }
  return (
    <div>
      <center>
        <br />
        <table>
          <tbody>
          <tr>
            <td>
              <AutoCompleteEmployee setKeyValue={setKeyValue} setToggleInOut={setToggleInOut} />
            </td>
            <td>
              <button className="RoundedButton" onClick={handleClockIn} disabled={toggleButton}>Clock In</button>
            </td>
            <td>
              <button className="RoundedButton" onClick={handleClockOut} disabled={!toggleButton}>Clock Out</button>
            </td>
          </tr>
          </tbody>
        </table>
      </center>
      <Navigation empName={empFormDetails.EmployeeName}/>
    </div>);
})
export default EmployeeHome;