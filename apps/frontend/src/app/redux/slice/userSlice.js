import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, users: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logOut: (state, action) => {
      state.user = null;
    },
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setCredentials, logOut, setAllUsers } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;
