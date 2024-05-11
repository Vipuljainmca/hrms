import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customDepartment: [],
};

const customDepartmentSlice = createSlice({
  name: 'customDepartment',
  initialState,
  reducers: {
    setCustomDepartment(state, action) {
      state.customDepartment = action.payload;
    },
    addCustomDepartment(state, action) {
      state.customDepartment.push(action.payload);
    },
  },
});

export const { setCustomDepartment, addCustomDepartment } = customDepartmentSlice.actions;
export default customDepartmentSlice.reducer;
