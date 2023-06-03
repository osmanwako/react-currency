import { configureStore } from '@reduxjs/toolkit';
import currencyreducer from './currencyslice';
import ratereducer from './exchangeslice';

const Store = configureStore({
  reducer: {
    currencylist: currencyreducer,
    ratelist: ratereducer,
  },
});

export default Store;
