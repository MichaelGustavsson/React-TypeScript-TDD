import { describe, expect, it } from 'vitest';
import { sum, subtract } from './intro';
// Describe (beskriver testets syfte, vad testar vi?)...
// Steg 1. Skapa en test svit...
describe('Calculator', () => {
  // it eller test beskriver testet
  it('Sum should return correct value', () => {
    // Förväntning för ett resultat
    // Act...
    const value = sum(1, 1);
    // Assert...
    expect(value).toBe(2);
  });

  it('subtract should return the correct value', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  describe('Nästlad svit av tester', () => {
    it('Nästlad 1', () => {});
    it('Nästlad 2', () => {});
  });
});

describe('MovieFlix MoviePage', () => {
  describe('Film navigering', () => {
    it('När jag klickar på den rosa knappen så ska jag komma till sidan med skräckfilmer', () => {});
  });
});
