import App from './App.js';
import { render, screen, firevent } from '@testing-library/react';

describe('count', () => {
  test('Add', () => {
    render(<App />);
    expect(screen.getByText(/App/i)).toBeInTheDocument();
  });
});
