import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // rendu du composant dans le test bed (conteneur de test)
  const linkElement = screen.getByText(/apprendre react/i); // récup de l'element qui contient le text "learn react" (regexp)
  expect(linkElement).toBeInTheDocument(); // on teste que l'élément est présent dans le DOM
});
