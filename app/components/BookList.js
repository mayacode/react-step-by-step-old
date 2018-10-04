import React from 'react';

export default ({ books }) => (
    <div>
        {console.log(books)}
        {books.map(book => (
            <div key={book.volumeInfo.title}>
                <div>Title: {book.volumeInfo.title}</div>
            </div>
        ))}
    </div>
);
