import React, { Component } from 'react';
import Search from '../components/Search';
import ArticleList from '../components/ArticleList';
import { fetchNews, searchNews } from '../services/NewsAPI';

export default class NewsSearch extends Component {
  state = {
    searchTerm: 'covid',
    loading: true,
    articles: {}
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }; 

  handleSubmit = async (e) => {
    e.preventDefault();

    const { searchTerm } = this.state;
    const articles = await searchNews(searchTerm);
    this.setState({ articles: articles.articles, loading: false });
  }

  async componentDidMount() {
    const articles = await fetchNews();
    this.setState({ articles: articles.articles, loading: false });
  }

  render() {
    const { searchTerm, articles, loading } = this.state;

    return (
      <>
        <Search 
          searchTerm={searchTerm} 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />

        {loading
          ? <h1>Loading...</h1>
          : <ul data-testid="list"> <ArticleList articles={articles} /> </ul>
        }
      </>
    );
  }
}