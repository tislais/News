import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  console.log('articles: ', articles);
  const articleMap = articles.map((article) => (
    <li key={article.title}>
      <Article
        title={article.title}
        author={article.author}
        description={article.description} />
    </li>
  ));
  return articleMap;
};

ArticleList.propTypes = {};

export default ArticleList;
