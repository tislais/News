import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('search component', () => {
  it('renders an input', () => {
    const term = 'covid';
    const { asFragment } = render(<Search search={term} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
