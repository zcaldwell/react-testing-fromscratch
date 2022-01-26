import { render, screen } from '@testing-library/react';
import Home from './Home';

test('test character cards load onto the page', async () => {
  render(<Home />);

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const characters = await screen.findAllByRole('listitem');
  expect(characters).toHaveLength(53);
});
