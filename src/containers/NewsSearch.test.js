import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch container', () => {
  it('renders news and displays news', async () => {
    render(<NewsSearch />);

    const input = screen.getByPlaceholderText('Topic...');
    fireEvent.change(input, { target: { value: 'corona' } });
    expect(input.value).toBe('corona');

  });
});
