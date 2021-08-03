// Article - Display an articles title, author, and description
import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{description}</p>
    </>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
