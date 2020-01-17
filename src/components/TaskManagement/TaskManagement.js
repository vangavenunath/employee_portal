import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AutoCompleteTask from '../AutoCompleteTask';
import '../TaskManagement/TaskManagement.scss';

const TaskManagement = (() => {
const [tasks, setTasks] = useState([[],])
  const [empTasks, setEmpTasks] = useState({EmployeeName: '', TaskName: ''})
  const [toggleButton, setToggleButton] = useState(false)

  useEffect(() => {
    console.log(empTasks)
    if(empTasks.EmployeeName !== ''){
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/v1/employee_tasks/' + empTasks.EmployeeName,
      data: empTasks,
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => setTasks(response.data))
    }
  },[empTasks])

  const setKeyValue = (key, val) => setEmpTasks({
    ...empTasks,
    [key]: [val],
  });

  const handleAddTask = () => {
    console.log(empTasks)
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/v1/task/',
      data: empTasks,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => console.log(response))
      .then(() => setEmpTasks({...empTasks}))
      .then(() => setToggleButton(true))
  }

  const handleUpdateTask = () => {
    axios({
      method: 'PUT',
      url: 'http://localhost:5000/api/v1/task/',
      data: empTasks,
      headers: { 'Content-Type': 'application/json', }
    })
      .then(response => console.log(response))
      .then(() => setEmpTasks({...empTasks}))
      .then(() => setToggleButton(false))
  }

  const handleDeleteTask = () => {
    axios({
      method: 'DELETE',
      url: 'http://localhost:5000/api/v1/task/',
      data: empTasks,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => console.log(response))
      .then(() => setEmpTasks({...empTasks}))
  }

  return (
    <div>
      <br/>
      <table>
     <tr>
      <td><AutoCompleteTask setKeyValue={setKeyValue}/>
      </td>
     <td>
     </td>
     <td>
      <button onClick={handleAddTask} disabled={toggleButton}>Add Task</button>
      </td>
      <td>
      <button onClick={handleUpdateTask} disabled={!toggleButton}>Update Task</button>
      </td>
      <td>
      <button onClick={handleDeleteTask}>Delete Task</button>
     </td>
     </tr>
     </table>
      <table className="table">
        <tbody>
          <tr className="table-header">
            <td className="table-header-field">DateWorked</td>
            <td className="table-header-field">TASKORSTEPNAME</td>
            <td className="table-header-field">Start Time</td>
            <td className="table-header-field">End Time</td>
            <td className="table-header-field">Actual Hours</td>
            <td className="table-header-field">Reference Description</td>
          </tr>
          {tasks.map((rows, index) => (
            <tr key={index} className="table-row">
              {rows.map((col, index) => (
                <td key={index} className="table-data">{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>);
})
export default TaskManagement;