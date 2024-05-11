import { configureStore } from '@reduxjs/toolkit';
import EmployeeReducer from './dashboard/employee/employeeSlice';
import AttendanceReducer from './dashboard/attendance/attendanceSlice';
import PayrollReducer from './dashboard/payroll/payrollSlice';
import LeaveReducer from './dashboard/leave/leaveSlice';
import CustomDepartmentReducerData from './dashboard/customDepartment/customDeparmentSlice';

import CustomizerReducer from './customizer/CustomizerSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    employeeReducer: EmployeeReducer,
    attendanceReducer: AttendanceReducer,
    payrollReducer: PayrollReducer,
    leaveReducer: LeaveReducer,
    customDepartmentReducer: CustomDepartmentReducerData,
  },
});

export default store;
