import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState { value: number }
const initialState: CounterState = { value: 0 };

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) { state.value += 1; },
    reset(state) { state.value = 0; },
    setAmount(state, action: PayloadAction<number>) { state.value = action.payload; }
  }
});

export const { increment, reset, setAmount } = slice.actions;
export default slice.reducer;
