import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RequestForm from '../components/RequestForm/RequestForm';

test('renders RequestForm and validates input fields', () => {
  render(<RequestForm />);

  const headingInput = screen.getByLabelText(/Heading/i);
  const descriptionInput = screen.getByLabelText(/Detailed Description/i);
  const addressInput = screen.getByLabelText(/Address/i);
  const categorySelect = screen.getByLabelText(/Category/i);

  // Check if the input fields are in the document
  expect(headingInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(addressInput).toBeInTheDocument();
  expect(categorySelect).toBeInTheDocument();

  // Simulate form submission without filling the form
  fireEvent.click(screen.getByText(/Submit Request/i));

  // Check for validation errors
  expect(screen.getByText(/Heading is required./i)).toBeInTheDocument();
  expect(screen.getByText(/Description is required./i)).toBeInTheDocument();
  expect(screen.getByText(/Address is required./i)).toBeInTheDocument();
  expect(screen.getByText(/Category is required./i)).toBeInTheDocument();
});
