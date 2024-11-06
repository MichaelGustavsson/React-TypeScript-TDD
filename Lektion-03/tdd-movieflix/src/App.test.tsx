import '@testing-library/jest-dom';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Importera vår komponent som ska testas...
import App from './App';

beforeEach(() => {
  // Instantierar App komponent
  render(<App />);
});

// En svit av tester...
describe('App component', () => {
  it('should have a correct heading', () => {
    // Act...
    // const heading = screen.getByText(/movieflix/i);
    const heading = screen.getByText('MovieFlix');
    // Assert...
    expect(heading).toBeInTheDocument();
  });

  // Test vid uppstart av sidan så ska vi ha en knapp med texten
  // Login
  // Skapa tester som följer/simulerar en användares
  // arbetssätt FLOW...
  it('should a login button with the text login and react on click', async () => {
    const user = userEvent.setup();
    const btnElem = screen.getByRole('button', { name: /login/i });
    expect(btnElem).toHaveClass('btn');

    await user.click(btnElem);

    // Test if the button text changed after click...
    expect(btnElem).toHaveTextContent(/logout/i);
  });
});
