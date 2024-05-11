import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employeeData: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployeeData(state, action) {
      state.employeeData = action.payload;
    },
    addEmployee(state, action) {
      state.employeeData.push(action.payload);
    },
    updateEmployee(state, action) {
      const index = state.employeeData.findIndex((employee) => employee.id === action.payload.id);
      if (index !== -1) {
        state.employeeData[index] = action.payload;
      }
    },
    deleteEmployee(state, action) {
      state.employeeData = state.employeeData.filter((employee) => employee.id !== action.payload);
    },
  },
});

export const { setEmployeeData, addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
