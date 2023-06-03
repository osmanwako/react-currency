import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Header link', () => {
  render(<App />);
  const linkElement = screen.getByText(/World Currency Application/i);
  expect(linkElement).toBeInTheDocument();
});
