import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loader/Loadable';
/****Layouts*****/

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/BlankLayout')));
/***** Pages ****/

const Dashboard = Loadable(lazy(() => import('../views/dashboards/Dashboard')));
const EmployeeView = Loadable(lazy(() => import('../views/dashboards/employee/EmployeeView')));
const AddEmployee = Loadable(lazy(() => import('../views/dashboards/employee/AddEmployee')));
const SingleEmployee = Loadable(
  lazy(() => import('../views/dashboards/single-employee/SingleEmployee')),
);
const DepartmentView = Loadable(
  lazy(() => import('../views/dashboards/department/DepartmentView')),
);
const AttendanceView = Loadable(
  lazy(() => import('../views/dashboards/attendance/AttendanceView')),
);
const AddDepartment = Loadable(lazy(() => import('../views/dashboards/department/AddDepartment')));
const UpdateDepartment = Loadable(
  lazy(() => import('../views/dashboards/department/UpdateDepartment')),
);

const LeaveView = Loadable(lazy(() => import('../views/dashboards/leave/LeaveView')));
const AddLeave = Loadable(lazy(() => import('../views/dashboards/leave/AddLeave')));

/***** Auth Pages ****/
const Error = Loadable(lazy(() => import('../views/auth/Error')));

/*****Routes******/

const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', name: 'Home', exact: true, element: <Dashboard /> },
      { path: '/employee', name: 'Employee', exact: true, element: <EmployeeView /> },
      { path: '/employee/:id', name: 'SingleEmployee', exact: true, element: <SingleEmployee /> },
      {
        path: '/addEmployee',
        name: 'Add Employee',
        exact: true,
        element: <AddEmployee />,
      },
      { path: '/attendance', name: 'Attendance', exact: true, element: <AttendanceView /> },
      {
        path: '/department',
        name: 'Department',
        exact: true,
        element: <DepartmentView />,
      },
      {
        path: '/addDepartment',
        name: 'Add Department',
        exact: true,
        element: <AddDepartment />,
      },
      {
        path: '/updateDepartment',
        name: 'Update Department',
        exact: true,
        element: <UpdateDepartment />,
      },
      { path: '/leave', name: 'Leave', exact: true, element: <LeaveView /> },
      { path: '/addLeave', name: 'Add Leave', exact: true, element: <AddLeave /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default ThemeRoutes;
