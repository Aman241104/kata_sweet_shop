// src/test/SweetListing.test.js
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SweetListings from '../components/SweetListings';

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 10 },
        { id: 2, name: 'Rasgulla', category: 'Milk-Based', price: 30, quantity: 20 },
      ]),
  })
);

describe('SweetListings component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders spinner while loading', async () => {
    render(
      <BrowserRouter>
        <SweetListings />
      </BrowserRouter>
    );

    // Instead of checking for "loading", check the spinner's existence
    const spinner = document.querySelector('span[style*="margin: 100px auto"]');
    expect(spinner).toBeInTheDocument();

    // Wait until data is loaded
    await waitFor(() => {
      expect(screen.getByText(/kaju katli/i)).toBeInTheDocument();
    });
  });

  test('fetches and displays sweet items', async () => {
    render(
      <BrowserRouter>
        <SweetListings />
      </BrowserRouter>
    );

    // Wait for elements to appear
    await waitFor(() => {
      expect(screen.getByText(/kaju katli/i)).toBeInTheDocument();
      expect(screen.getByText(/rasgulla/i)).toBeInTheDocument();
    });
  });

  test('uses limit=3 when isHome is true', async () => {
    render(
      <BrowserRouter>
        <SweetListings isHome />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('limit=3'));
    });
  });
});
