import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
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

ArticleList.propTypes = {
  articles: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default ArticleList;
