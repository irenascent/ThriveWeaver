// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ThriveWeaver title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ThriveWeaver/i);
    expect(titleElement).toBeInTheDocument();
});
