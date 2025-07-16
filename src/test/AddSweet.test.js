// Add polyfills BEFORE any other imports
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddSweet from '../pages/AddSweet';

// Mock useNavigate to avoid navigation on submit
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('AddSweet component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders form fields and button', () => {
    const mockOnAdd = jest.fn();

    render(
      <BrowserRouter>
        <AddSweet onAdd={mockOnAdd} />
      </BrowserRouter>
    );

    // Check if form fields exist
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/quantity/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add sweet/i })).toBeInTheDocument();
  });

  test('submits form with correct data', () => {
    const mockOnAdd = jest.fn();

    render(
      <BrowserRouter>
        <AddSweet onAdd={mockOnAdd} />
      </BrowserRouter>
    );

    // Fill out form fields
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Rasgulla' } });
    fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Syrup-Based' } });
    fireEvent.change(screen.getByLabelText(/price/i), { target: { value: '40' } });
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '5' } });

    fireEvent.click(screen.getByRole('button', { name: /add sweet/i }));

    expect(mockOnAdd).toHaveBeenCalledWith({
      name: 'Rasgulla',
      category: 'Syrup-Based',
      price: 40,
      quantity: 5,
    });

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  });

  test('prevents submission with empty fields', () => {
    const mockOnAdd = jest.fn();

    render(
      <BrowserRouter>
        <AddSweet onAdd={mockOnAdd} />
      </BrowserRouter>
    );

    // Click without filling anything
    fireEvent.click(screen.getByRole('button', { name: /add sweet/i }));

    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});
