import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import MediaSearch from './MediaSearch';

test('Fails when less than 2 characters are searched', () => {
  // Render the MediaSearch component
  render(<MediaSearch />);

  // Find the search input by role and class name
  const searchInput = screen.getByRole('textbox', { name: '', className: 'search-input' });

  // Find the search button by role and name
  const searchButton = screen.getByRole('button', { name: 'btn' });

  // Type 'a' into the search input
  userEvent.type(searchInput, 'a');

  // Click the search button
  userEvent.click(searchButton);

  // Assert that the error message is displayed
  expect(screen.getByText('Please enter a valid search term of 2 or more characters')).toBeInTheDocument();
});
