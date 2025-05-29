import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,


  reducers: {
    initCounterState: (state, action:PayloadAction<number>) => {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },


    addOne: (state) => {
      state.count += 1;
    },
    subStractOne: (state) => {
      if (state.count <= 0) {
        return;
      }
      state.count -= 1;
    },
    resetCount: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;

      state.count = action.payload;
    },
  },
});

export const { addOne, subStractOne, resetCount, initCounterState} = counterSlice.actions;

export default counterSlice.reducer;
