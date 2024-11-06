import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

// Importera vår komponent som ska testas...
import App from './App';

describe('App component', () => {
  it('should have a correct heading', () => {
    // Instantierar App komponent

    render(<App />);
    // Act...
    const heading = screen.getByText(/movieflix/i);
    // Assert...
    expect(heading).toBeInTheDocument();
  });
});
