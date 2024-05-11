import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  payroll: [],
};

const payrollSlice = createSlice({
  name: 'payroll',
  initialState,
  reducers: {
    setPayrollData(state, action) {
      state.payroll = action.payload;
    },
    addPayroll(state, action) {
      state.payroll.push(action.payload);
    },
    updatePayroll(state, action) {
      const index = state.payroll.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.payroll[index] = action.payload;
      }
    },
    deletePayroll(state, action) {
      state.payroll = state.payroll.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setPayrollData, addPayroll, updatePayroll, deletePayroll } = payrollSlice.actions;

export default payrollSlice.reducer;
