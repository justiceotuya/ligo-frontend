import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Sharing a ride just got easier', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Sharing a ride just got easier/i);
  expect(linkElement).toBeInTheDocument();
});
