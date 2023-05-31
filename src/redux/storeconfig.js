import { configureStore } from '@reduxjs/toolkit';
import currencyreducer from './currencyslice';

const Store = configureStore({
  reducer: {
    currencylist: currencyreducer,
  },
});

export default Store;
