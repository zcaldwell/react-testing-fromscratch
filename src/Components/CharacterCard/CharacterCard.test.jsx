import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';

test('should render a charactercard', () => {
  render(
    <CharacterCard
      character={{
        id: 0,
        fullName: 'Daenerys Targaryen',
        title: 'Mother of Dragons',
        family: 'House Targaryen',
        imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
      }}
    />
  );
  const character = screen.getByText(/Daenerys/);
  expect(character).toBeInTheDocument();
});
