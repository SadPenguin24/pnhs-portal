import { createSlice } from '@reduxjs/toolkit';

const enrolleeSlice = createSlice({
  name: 'enrollee',
  initialState: { enrollee: null },
  reducers: {
    createEnrollee: (state, action) => {
      const { enrollee } = action.payload;
      state.enrollee = enrollee;
    },
  },
});

export const { createEnrollee } = enrolleeSlice.actions;

export default enrolleeSlice.reducer;
