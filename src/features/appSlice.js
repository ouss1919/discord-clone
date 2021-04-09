import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    channel : null
  },

  reducers: {
    setChannel: (state, action) => {
      state.channel = action.payload;
    }
  }
});

export const { setChannel } = appSlice.actions;

export const selectChannel = (state) => state.app.channel;

export default appSlice.reducer;
