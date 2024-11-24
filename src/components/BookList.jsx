import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book, index) => (
                <BookCard key={index} book={book} />
            ))}
        </div>
    );
};

export default BookList;
