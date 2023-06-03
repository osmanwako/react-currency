import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://v6.exchangerate-api.com/v6/e206c283b2a91503046e02e5/latest/';

const initialState = {
  rates: [],
  status: 'idle',
  load: Date.now(),
  message: 'Everything is good',
  total: 0,
};
const getexchangerate = (lists) => {
  const rates = lists.conversion_rates;
  return rates;
};
export const ExchangeRate = createAsyncThunk('loadRate/ExchangeRate', async (code) => {
  const response = await axios.get(`${url}${code}`);
  const { data } = response;
  return getexchangerate(data);
});

export const Exchangeslice = createSlice({
  name: 'exchangerate',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(ExchangeRate.pending, (state) => {
      const newstate = {
        ...state,
        status: 'pending',
        rates: [],
      };
      return { ...newstate };
    }).addCase(ExchangeRate.fulfilled, (state, action) => {
      const newstate = {
        ...state,
        status: 'fulfilled',
        rates: action.payload,
      };
      return { ...newstate };
    }).addCase(ExchangeRate.rejected, (state, action) => {
      const newstate = {
        ...state,
        status: 'rejected',
        message: action.payload,
        rates: [],
      };
      return { ...newstate };
    });
  },
});

export default Exchangeslice.reducer;
