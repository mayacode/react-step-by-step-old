import React, { Component } from 'react';
import BookSearch from './BookSearch';
import BookList from './BookList';

const googleBooksSearchAPI = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BookContainer extends Component {
    state = {
        keyword: '',
        books: []
    };

    componentDidUpdate = (prevProps, prevState) => {
        const { keyword } = this.state;
        if (keyword.length > 2 && prevState.keyword !== keyword) {
            fetch(`${googleBooksSearchAPI}${keyword}`)
                .then(response => response.json())
                .then(myJson => {
                    this.setState({ books: myJson.items });
                });
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
