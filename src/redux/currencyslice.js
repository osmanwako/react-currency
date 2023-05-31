import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://v6.exchangerate-api.com/v6/e206c283b2a91503046e02e5/codes';

const initialState = {
  currencies: [],
  status: 'idle',
  load: Date.now(),
  message: 'Everything is good',
  total: 0,
};
const getcurrencies = (lists) => {
  const currencies = lists.supported_codes.map((list) => ({ code: list[0], description: list[1] }));
  return currencies;
};
export const loadCurrency = createAsyncThunk('currenciestores/loadCurrency', async () => {
  const response = await axios.get(url);
  const { data } = response;
  return getcurrencies(data);
});

export const Currencyslice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loadCurrency.pending, (state) => {
      const newstate = {
        ...state,
        status: 'pending',
        currencies: [],
      };
      return { ...newstate };
    }).addCase(loadCurrency.fulfilled, (state, action) => {
      const newstate = {
        ...state,
        status: 'fulfilled',
        currencies: action.payload,
      };
      return { ...newstate };
    }).addCase(loadCurrency.rejected, (state, action) => {
      const newstate = {
        ...state,
        status: 'rejected',
        message: action.payload,
        currencies: [],
      };
      return { ...newstate };
    });
  },
});

export default Currencyslice.reducer;
