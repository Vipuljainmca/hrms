import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leaves: [],
};

const leaveSlice = createSlice({
  name: 'leave',
  initialState,
  reducers: {
    setLeaveData(state, action) {
      state.leaves = action.payload;
    },
    addLeave(state, action) {
      state.leaves.push(action.payload);
    },
    updateLeave(state, action) {
      const index = state.leaves.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.leaves[index] = action.payload;
      }
    },
    deleteLeave(state, action) {
      state.leaves = state.leaves.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setLeaveData, addLeave, updateLeave, deleteLeave } = leaveSlice.actions;

export default leaveSlice.reducer;
