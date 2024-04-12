import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userChoice: null,
  computerChoice: null,
  message: '',
  isRoundActive: true,
  score: 0,
  round: 1,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUserChoice: (state, action) => {
      state.userChoice = action.payload;
      state.computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
      state.isRoundActive = false;

      if(state.userChoice === state.computerChoice) {
        state.message = 'Egalité';
        state.score += 5;
      }
      else if(
        (state.userChoice === 'rock' && state.computerChoice === 'scissors') ||
        (state.userChoice === 'paper' && state.computerChoice === 'rock') ||
        (state.userChoice === 'scissors' && state.computerChoice === 'paper')
      ) {
        state.message = 'Gagné';
        state.score += 10;
      }
      else {
        state.message = 'Perdu';
      }
    },
    prepareNextRound: (state) => {
      state.userChoice = null;
      state.computerChoice = null;
      state.message = '';
      state.isRoundActive = true;
      state.round += 1;
    },
    reset: (state) => {
      state.userChoice = null;
      state.computerChoice = null;
      state.message = '';
      state.score = 0;
      state.isRoundActive = true;
      state.round = 1;
    },
  },
});

export const { setUserChoice, prepareNextRound, reset } = gameSlice.actions;

export default gameSlice.reducer;
