import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Details from '../components/details';

const mockStore = configureStore([]);

describe('Details', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      ratelist: {
        rates: {
          USD: 1.22,
          EUR: 1.10,
        },
      },
      currencylist: {
        currencies: [
          {
            code: 'USD',
            description: 'United States Dollar',
          },
          {
            code: 'EUR',
            description: 'Euro',
          },
        ],
      },
    });
  });

  it('renders the component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Details code="USD" />
      </Provider>,
    );
    expect(getByText('United States Dollar')).toBeInTheDocument();
  });
});
