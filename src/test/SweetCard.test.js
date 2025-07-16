import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SweetCard from '../components/SweetCard';
import { BrowserRouter } from 'react-router-dom';

describe('SweetCard component', () => {
  const sweet = {
    id: 1,
    name: 'Gulab Jamun',
    category: 'Milk-Based',
    price: 20,
    quantity: 5
  };

  const renderComponent = () => {
    render(
      <BrowserRouter>
        <SweetCard items={sweet} />
      </BrowserRouter>
    );
  };

  test('renders sweet details correctly', () => {
    renderComponent();

    expect(screen.getByText('Gulab Jamun')).toBeInTheDocument();
    expect(screen.getByText(/Category:/i)).toBeInTheDocument();
    expect(screen.getByText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByText(/Available:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    expect(screen.getByText(/purchase/i)).toBeInTheDocument();
  });

  test('increments and decrements count properly', () => {
    renderComponent();

    const plusBtn = screen.getByRole('button', { name: '+' });
    const minusBtn = screen.getByRole('button', { name: '-' });
    const countDisplay = screen.getByText('0');

    // increment
    fireEvent.click(plusBtn);
    expect(screen.getByText('1')).toBeInTheDocument();

    // decrement
    fireEvent.click(minusBtn);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('disables buttons when appropriate', () => {
    renderComponent();

    const minusBtn = screen.getByRole('button', { name: '-' });
    expect(minusBtn).toBeDisabled();

    const plusBtn = screen.getByRole('button', { name: '+' });

    // Click + 5 times
    for (let i = 0; i < 5; i++) {
      fireEvent.click(plusBtn);
    }

    expect(plusBtn).toBeDisabled(); // Max quantity reached
  });
});
