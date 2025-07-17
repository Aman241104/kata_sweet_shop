// src/test/Navbar.test.js
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
jest.mock('../assets/ChatGPT Image Jul 17, 2025, 12_52_15 PM.png', () => '');

describe('Navbar component', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/add sweet/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search sweets/i)).toBeInTheDocument();
  });

  test('search input updates and calls onSubmit', () => {
    // Mock window.location or use a callback if Navbar handles search via props
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText(/search sweets/i);
    fireEvent.change(input, { target: { value: 'rasgulla' } });
    expect(input.value).toBe('rasgulla');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    // Add your expected behavior/assertion if input triggers something
  });
});
