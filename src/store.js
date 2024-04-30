import { configureStore } from '@reduxjs/toolkit';

//STEP2 CREATE ROOT STORE AND CONNECT USERSLICE OR OTHER SLICES
import userReducer from './features/user/userSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
