const getexchangerate = (lists) => {
  const rates = lists.conversion_rates;
  return rates;
};

describe('getexchangerate', () => {
  it('should return an object of exchange rates', () => {
    const lists = {
      conversion_rates: {
        USD: 1,
        EUR: 0.82,
        JPY: 109.34,
      },
    };
    const expectedRates = {
      USD: 1,
      EUR: 0.82,
      JPY: 109.34,
    };
    expect(getexchangerate(lists)).toEqual(expectedRates);
  });
});
