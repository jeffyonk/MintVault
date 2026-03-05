// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MintVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MintVault/i);
    expect(titleElement).toBeInTheDocument();
});
