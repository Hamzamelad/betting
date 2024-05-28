import { createSlice } from "@reduxjs/toolkit";
import { db } from "@/lib/db";


const initialState: Slip = {
  event: null,
  betOn: 0,
  betAmount: 0,
};

export const SlipSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload;
    },
    setBetOn: (state, action) => {
      state.betOn = action.payload;
    },
    setBetAmount: (state, action) => {
      state.betAmount = action.payload;
    },
  },
});

export const { setEvent, setBetOn, setBetAmount } =
  SlipSlice.actions;
export default SlipSlice.reducer;
