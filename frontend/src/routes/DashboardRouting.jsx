import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ActiveProject from '../containers/ActiveProjects';
import CompletedProject from '../containers/CompletedProjects';
import HrDashboard from '../containers/HrDashboard';
import Login from '../containers/Login';
import ProjectDb from '../containers/ProjectsDb';
import Signup from '../containers/Signup';
import Tickets from '../containers/Tickets';
const DashboardRouting = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/main/dashboard/hr" element={<HrDashboard />} />
                    <Route path="/main/dashboard/projects" element={<ProjectDb />} />
                    <Route path="/main/projects/active" element={<ActiveProject />} />
                    <Route path="/main/projects/completed" element={<CompletedProject />} />
                    <Route path="/main/tickets/active" element={<Tickets />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default DashboardRouting