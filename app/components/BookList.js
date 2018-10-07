import React from 'react';

export default ({ books }) => (
    <div>
        {books.map(book => (
            <div key={book.volumeInfo.industryIdentifiers[0].identifier}>
                <div>Title: {book.volumeInfo.title}</div>
            </div>
        ))}
    </div>
);
