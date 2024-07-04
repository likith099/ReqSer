// RequestForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RequestForm from './Request';

describe('RequestForm Component', () => {
  test('renders RequestForm component', () => {
    render(<RequestForm />);
    expect(screen.getByText('Post Your Request')).toBeInTheDocument();
  });

  test('displays validation messages when fields are empty', () => {
    render(<RequestForm />);
    
    fireEvent.click(screen.getByText('Submit Request'));

    expect(screen.getByText('Heading is required.')).toBeInTheDocument();
    expect(screen.getByText('Description is required.')).toBeInTheDocument();
    expect(screen.getByText('Address is required.')).toBeInTheDocument();
    expect(screen.getByText('Category is required.')).toBeInTheDocument();
  });

  test('submits form when all fields are filled', () => {
    const { getByLabelText, getByText } = render(<RequestForm />);

    fireEvent.change(getByLabelText('Heading'), { target: { value: 'Test Heading' } });
    fireEvent.change(getByLabelText('Detailed Description'), { target: { value: 'Test Description' } });
    fireEvent.change(getByLabelText('Address'), { target: { value: 'Test Address' } });
    fireEvent.change(getByLabelText('Category'), { target: { value: 'Plumbing' } });
    fireEvent.change(getByLabelText('Date'), { target: { value: '2024-07-01' } });

    fireEvent.click(getByText('Submit Request'));

    expect(screen.queryByText('Heading is required.')).not.toBeInTheDocument();
    expect(screen.queryByText('Description is required.')).not.toBeInTheDocument();
    expect(screen.queryByText('Address is required.')).not.toBeInTheDocument();
    expect(screen.queryByText('Category is required.')).not.toBeInTheDocument();

    // Optionally, check if the form data is logged (or handle the submission in a real app)
    // Note: You can mock the form submission if it's supposed to send data to a server
  });
});
