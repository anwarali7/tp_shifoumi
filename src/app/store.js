import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
import userReducer from '../features/user/userSlice';

export default configureStore ({
    reducer: {
        game: gameReducer,
        user: userReducer
    }
})
