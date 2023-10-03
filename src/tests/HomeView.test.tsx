import React from 'react';
import { render } from '@testing-library/react';
import HomeView from '../views/HomeView';

describe('HomeView Component', () => {
  it('renders without crashing', () => {
    render(<HomeView />);
  });

  // Add more test cases as needed.
});

