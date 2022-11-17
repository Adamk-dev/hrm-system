import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import '../styles/sidebar.scss'

import { Grid } from '@mui/material';
import TaskLogo from '../assets/images/tasklogo.png'
import DashboardIcon from '../assets/images/Dashboard_icon.png'
import ProjectIcon from '../assets/images/projects_icon.png'
import TicketIcon from '../assets/images/ticket.png'
import ClientIcon from '../assets/images/client.png'
import EmployeeIcon from '../assets/images/employees.png'
import SalesIcon from '../assets/images/sales.png'
import AccountsIcon from '../assets/images/accounts.png'
import PayrollIcon from '../assets/images/payroll.png'
import PoliciesIcon from '../assets/images/policies.png'
import ReportIcon from '../assets/images/report.png'



function Navbar({ activeScreen }) {
  // const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div style={{ backgroundColor: "#283686", margin: "2rem", borderLeft: "2px solid #283686", position: "sticky", top: "5px" }} className='sidebar-div'>
      <Grid >
        <div className='headingcon'>  <span ><img src={TaskLogo} alt="" setIsSid /></span> <span className='taskheading'>My-Task</span> </div>
        <Navigation
          // you can use your own router's api to get pathname
          activeItemId={`${activeScreen}`}
          onSelect={({ itemId }) => {
            // maybe push to the route
            // navigate(`${itemId}`);


          }}

          items={
            [
              {
                title: 'Dashboard',
                itemId: '/dashboard/hr',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <img src={DashboardIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Hr Dashboard',
                    itemId: '/main/dashboard/hr',
                  },
                  {
                    title: 'Project Dashoard',
                    itemId: '/main/dashboard/projects',
                  },
                ],
              },
              {
                title: 'Projects',
                itemId: '/main/projects/active',
                elemBefore: () => <img src={ProjectIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Active',
                    itemId: '/projects/active',
                  },
                  {
                    title: 'Completed',
                    itemId: '/projects/completed',
                  },
                ],
              },
              {
                title: 'Tickets',
                itemId: '/main/tickets/active',
                elemBefore: () => <img src={TicketIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Active',
                    itemId: '/tickets/active',
                  },
                  {
                    title: 'Completed',
                    itemId: '/main/tickets/completed',
                  },
                ],
              },
              {
                title: 'Clients',
                itemId: '/main/clients/active',
                elemBefore: () => <img src={ClientIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Active',
                    itemId: '/main/clients/active',
                  },
                  {
                    title: 'Completed',
                    itemId: '/main/clients/completed',
                  },
                ],
              },


              {
                title: 'Employees',
                itemId: '/main/employees/active',
                elemBefore: () => <img src={EmployeeIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Active',
                    itemId: '/main/employees/active',
                  },
                  {
                    title: 'Completed',
                    itemId: '/main/employees/completed',
                  },
                ],
              },

              {
                title: 'Sales',
                itemId: '/main/sales/active',
                elemBefore: () => <img src={SalesIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Active',
                    itemId: '/main/sales/active',
                  },
                  {
                    title: 'Completed',
                    itemId: '/main/sales/completed',
                  },
                ],
              },
              {
                title: 'Accounts',
                itemId: '/main/accounts/active',
                elemBefore: () => <img src={AccountsIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Active',
                    itemId: '/main/accounts/active',
                  },
                  {
                    title: 'Completed',
                    itemId: '/main/accounts/completed',
                  },
                ],
              },
              {
                title: 'Payroll',
                itemId: '/main/payroll/active',
                elemBefore: () => <img src={PayrollIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Active',
                    itemId: '/main/payroll/active',
                  },
                  {
                    title: 'Completed',
                    itemId: '/main/payroll/completed',
                  },
                ],
              },


              {
                title: 'Policies',
                itemId: '/main/policies/active',
                elemBefore: () => <img src={PoliciesIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Active',
                    itemId: '/main/policies/active',
                  },
                  {
                    title: 'Completed',
                    itemId: '/main/policies/completed',
                  },
                ],
              },

              {
                title: 'Reports',
                itemId: '/main/reports/active',
                elemBefore: () => <img src={ReportIcon} className='icons' />,
                subNav: [
                  {
                    title: 'Active',
                    itemId: '/main/reports/active',
                  },
                  {
                    title: 'Completed',
                    itemId: '/main/reports/completed',
                  },
                ],
              },
            ]}
        />
      </Grid>
    </div>
  );
}
export default Navbar