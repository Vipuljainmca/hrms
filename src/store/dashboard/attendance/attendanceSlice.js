import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  attendanceData: [],
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    setAttendanceData(state, action) {
      state.attendanceData = action.payload;
    },
    AddAttendance(state, action) {
      state.attendanceData.push(action.payload);
    },
    DeleteAttendance(state, action) {
      state.attendanceData = state.attendanceData.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setAttendanceData, AddAttendance, DeleteAttendance } = attendanceSlice.actions;

export default attendanceSlice.reducer;
