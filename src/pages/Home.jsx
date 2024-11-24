import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [authorTerm, setAuthorTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    // Debounce the search term and author term
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const debouncedAuthorTerm = useDebounce(authorTerm, 300);

    const fetchBooks = async (title, author) => {
        setLoading(true);
        const query = [];
        if (title) query.push(`title=${title}`);
        if (author) query.push(`author=${author}`);

        const response = await fetch(`https://openlibrary.org/search.json?${query.join('&')}`);
        const data = await response.json();
        setBooks(data.docs);
        setLoading(false);
    };

    useEffect(() => {
        if (debouncedSearchTerm || debouncedAuthorTerm) {
            fetchBooks(debouncedSearchTerm, debouncedAuthorTerm);
        }
    }, [debouncedSearchTerm, debouncedAuthorTerm]);

    return (
        <div className="container mx-auto p-4">
            {/* <h1 className="text-2xl font-bold text-center mb-4">Book Finder</h1> */}
            <SearchBar
                searchTerm={searchTerm}
                authorTerm={authorTerm}
                setSearchTerm={setSearchTerm}
                setAuthorTerm={setAuthorTerm}
            />
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <BookList books={books} />
            )}
        </div>
    );
};

export default Home;
