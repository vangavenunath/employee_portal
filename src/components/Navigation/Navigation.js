import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
// import {StyledNavLink} from '../styles/CommonStyles'
import TaskManagement from '../TaskManagement/TaskManagement'
import LeaveManagement from '../LeaveManagement/LeaveManagement'
import Profile from '../Profile/Profile'
import Reworks from '../Reworks/Reworks'
import './Navigation.scss'

const Navigation = ((props) => {

    return (
        <div>
            <BrowserRouter>
            <table>
                <tbody>
                <tr>
                <td className="cell">
                <NavLink to="/TaskManagement" activeClassName="active">Time Capture</NavLink>
                </td><td className="cell">
                <NavLink to="/LeaveManagement" activeClassName="active">Leave Management</NavLink>
                </td><td className="cell">
                <NavLink to="/Reworks" activeClassName="active">Reworks</NavLink>
                </td><td className="cell">
                <NavLink exact activeClassName="active" to="/Profile">Profile</NavLink>
                </td>
                <td className="lastCell"></td>
                </tr></tbody>
                </table>
                <Switch>
                    <Route path="/Profile">
                        <Profile />
                    </Route>
                    <Route path="/Reworks">
                        <Reworks />
                    </Route>
                    <Route path="/TaskManagement">
                        <TaskManagement empName={props.empName}/>
                    </Route>
                    <Route path="/LeaveManagement">
                        <LeaveManagement />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
})
export default Navigation;