import React, { Component } from 'react';
import BookSearch from './BookSearch';
import BookList from './BookList';

export const googleBooksSearchAPI = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BookContainer extends Component {
  state = {
    keyword: '',
    books: []
  };

  displayName = 'BookContainer';

  updateBooks = books => this.setState({ books });

  getBooks = keyword => fetch(`${googleBooksSearchAPI}${keyword}`)
    .then(response => response.json())
    .then(myJson => this.updateBooks(myJson.items))
    .catch(error => console.log('error', error)); // eslint-disable-line no-console

  componentDidUpdate = async (prevProps, prevState) => {
    const { keyword } = this.state;
    if (keyword.length > 2 && prevState.keyword !== keyword) {
      this.getBooks(keyword);
    }
  };

  changeHandler = e => {
    const keyword = e.target.value;
    this.setState({ keyword });
  };

  render() {
    return (
      <section>
        <BookSearch changeHandler={this.changeHandler} />
        <BookList books={this.state.books}/>
      </section>
    );
  }
}
