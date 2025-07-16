import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddSweet from '../components/AddSweet'; // ✅ Adjust path if needed

describe('AddSweet component', () => {
  test('adds a sweet and passes data to onAdd callback', () => {
    const handleAdd = jest.fn();

    render(<AddSweet onAdd={handleAdd} />);

    // Fill the form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Kaju Katli' } });
    fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Nut-Based' } });
    fireEvent.change(screen.getByLabelText(/price/i), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '10' } });

    // Submit the form
    fireEvent.click(screen.getByText(/add/i));

    // Assert the callback was called with correct data
    expect(handleAdd).toHaveBeenCalledWith({
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 10
    });

    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
});
