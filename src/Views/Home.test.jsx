import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

test('test character cards load onto the page', async () => {
  render(<Home />);

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const characters = await screen.findAllByRole('listitem');
  expect(characters).toHaveLength(53);
});

test('test for sort behavior', async () => {
  render(<Home />);

  const sort = await screen.findByRole('combobox');
  userEvent.selectOptions(sort, 'asc');
  expect(screen.getByRole('option', { name: 'asc' }).selected).toBe(true);
});
