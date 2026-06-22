import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

test('renders Hello, World!', () => {
  render(<App />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
 