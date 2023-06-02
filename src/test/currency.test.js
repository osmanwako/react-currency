/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Currency from '../components/currency';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('<Currency />', () => {
  const mockData = [
    { code: 'ETB', description: 'Ethiopian Birr' },
    { code: 'USD', description: 'USA Dollar' },
    { code: 'ALL', description: 'Albenian  Alen' },
    { code: 'AFG', description: 'Afganistan Afghain' },
  ];

  beforeEach(() => {
    useSelector.mockReturnValue({ currencies: mockData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('1. Test Date render Correctily', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Currency />
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
