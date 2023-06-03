const getcurrencies = (lists) => {
  const currencies = lists.supported_codes.map((list) => ({ code: list[0], description: list[1] }));
  return currencies;
};

describe('getcurrencies', () => {
  it('should return an array of currencies', () => {
    const lists = {
      supported_codes: [
        ['USD', 'US Dollar'],
        ['EUR', 'Euro'],
        ['JPY', 'Japanese Yen'],
      ],
    };
    const expectedCurrencies = [
      { code: 'USD', description: 'US Dollar' },
      { code: 'EUR', description: 'Euro' },
      { code: 'JPY', description: 'Japanese Yen' },
    ];
    expect(getcurrencies(lists)).toEqual(expectedCurrencies);
  });
});
