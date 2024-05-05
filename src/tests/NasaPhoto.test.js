import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importing to ensure toBeInTheDocument is available
import NasaPhoto from '../components/APOD';

// Mocking the useTheme hook
jest.mock('../context/ThemeContext', () => ({
  useTheme: () => ({ theme: 'light' }) // Mocking the useTheme hook
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        title: 'Test Title',
        date: '2024-05-05',
        explanation: 'Test explanation',
        media_type: 'image',
        url: 'https://example.com/test-image.jpg',
      }),
  })
);

it('renders loading state correctly', async () => {
  render(<NasaPhoto />);
  expect(screen.getByTestId('loading-state')).toBeInTheDocument();
});

it('renders photo data correctly', async () => {
    render(<NasaPhoto />);
    try {
      const photoTitleElement = await screen.findByTestId('photo-title');
      console.log('Photo title element:', photoTitleElement);
      expect(photoTitleElement).toBeInTheDocument();
      expect(photoTitleElement).toHaveTextContent('Test Title');
      expect(screen.getByText('2024-05-05')).toBeInTheDocument();
    } catch (error) {
      console.error('Error finding photo title element:', error);
    }
  });
  
  
