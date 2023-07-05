import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Nav from './components/Nav';

test('check book link exist in navbar', () => {
  render(<MemoryRouter><Nav /></MemoryRouter>);
  const linkElement = screen.getByText(/Book/i);
  expect(linkElement).toBeInTheDocument();
});
