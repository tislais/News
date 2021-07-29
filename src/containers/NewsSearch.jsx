import React, { Component } from 'react';
import Search from '../components/Search';
import ArticleList from '../components/ArticleList';
import { fetchNews } from '../services/NewsAPI';

export default class NewsSearch extends Component {
  state = {
    searchTerm: 'hi',
    loading: true,
    articles: {}
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }; 

  async componentDidMount() {
    const articles = await fetchNews();
    this.setState({ articles: articles.articles, loading: false });
    console.log(this.state.articles);
  }

  render() {
    const { searchTerm, articles, loading } = this.state;

    return (
      <>
        <Search 
          searchTerm={searchTerm} 
          onChange={this.handleChange} />

        {loading
          ? <h1>Loading...</h1>
          : <ArticleList articles={articles} />}
      </>
    );
  }
}