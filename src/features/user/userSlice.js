import { createSlice } from '@reduxjs/toolkit';
import usersData from './users.jsx';

const initialState = {
  users: usersData,
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.currentUser = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = state.users.find(user => user.email === action.payload);
    },
    setCurrentUserScore: (state, action) => {
      if (state.currentUser !== null) {
        state.users = state.users.map(user => {
          if (user.email === state.currentUser.email) {
            user.score = action.payload;
            console.log("assigned score to user")
          }
          return user;
        });
      }
    }
  },
});

export const { addUser, setCurrentUser, setCurrentUserScore } = userSlice.actions;

export default userSlice.reducer;
