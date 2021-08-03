import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  it('renders title, author, description', () => {
    const articles = [{
      title: 'title',
      author: 'author',
      description: 'description'
    }];

    const { asFragment } = render(
      <ArticleList articles={articles}/>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
