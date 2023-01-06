import { render, screen } from '@testing-library/react';
import History from './history';
import '@testing-library/jest-dom';
import React from 'react';


describe('History Component', () => {
  test('renders history correctly', () => {
    render(<History/>);

    expect(screen.getByText('history')).toBeinTheDocument();

  });
});