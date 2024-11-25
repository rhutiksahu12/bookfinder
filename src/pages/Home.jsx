import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const Home = () => {

    // const [searchTerm, setSearchTerm] = useState('');
    // const [authorTerm, setAuthorTerm] = useState('');

    const [query, setQuery] = useState(''); 
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    // Debounce the search term, author term, and query
    // const debouncedSearchTerm = useDebounce(searchTerm, 300);
    // const debouncedAuthorTerm = useDebounce(authorTerm, 300);

    const debouncedQuery = useDebounce(query, 600);

    const fetchBooks = async ({ title, author, q }) => {
        setLoading(true);

        const queryParams = [];

        // if (title) queryParams.push(`title=${encodeURIComponent(title)}`);
        // if (author) queryParams.push(`author=${encodeURIComponent(author)}`);

        if (q) queryParams.push(`q=${encodeURIComponent(q)}`);

        const response = await fetch(`https://openlibrary.org/search.json?${queryParams.join('&')}`);
        const data = await response.json();

        setBooks(data.docs);
        setLoading(false);
    };

    // useEffect(() => {
    //     if (debouncedSearchTerm || debouncedAuthorTerm) {
    //         fetchBooks({ title: debouncedSearchTerm, author: debouncedAuthorTerm });
    //     }
    // }, [debouncedSearchTerm, debouncedAuthorTerm]);

    useEffect(() => {

        // query search
        if (debouncedQuery) {
            fetchBooks({ q: debouncedQuery });
        }
        
    }, [debouncedQuery]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Book Finder</h1>

            <div className="mb-4">
                <SearchBar
                    searchTerm={query}
                    setSearchTerm={setQuery}
                    placeholder="Search by title, author, subject, or keywords..."
                    clearSearch={() => setQuery('')}
                />
            </div>


            {/* <div className="mb-4">
                <SearchBar
                    searchTerm={searchTerm}
                    authorTerm={authorTerm}
                    setSearchTerm={setSearchTerm}
                    setAuthorTerm={setAuthorTerm}
                    advanced
                />
            </div> */}

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <BookList books={books} />
            )}
        </div>
    );
};

export default Home;
