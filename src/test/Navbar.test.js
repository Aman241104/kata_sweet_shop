import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../assets/ChatGPT Image Jul 17, 2025, 12_52_15 PM.png', () => 'mock-image');

test('calls setSearchQuery when search is submitted', () => {
  const mockSetSearchQuery = jest.fn();

  const { getByPlaceholderText, getByRole } = render(
    <BrowserRouter>
      <Navbar setSearchQuery={mockSetSearchQuery} />
    </BrowserRouter>
  );

  const input = getByPlaceholderText('Search sweets...');
  const button = getByRole('button', { name: /search/i });

  fireEvent.change(input, { target: { value: 'rasgulla' } });
  fireEvent.click(button); // Simulate clicking the search button

  expect(mockSetSearchQuery).toHaveBeenCalledWith('rasgulla');
});
