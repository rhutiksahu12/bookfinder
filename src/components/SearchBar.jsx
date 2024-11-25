import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';


const SearchBar = ({
    searchTerm,
    setSearchTerm,
    authorTerm,
    setAuthorTerm,
    placeholder = "Search...",
    clearSearch,
    
}) => {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* {advanced ? (
                <>
                    <Input
                        type="text"
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1"
                    />
                    <Input
                        type="text"
                        placeholder="Search by author..."
                        value={authorTerm}
                        onChange={(e) => setAuthorTerm(e.target.value)}
                        className="flex-1"
                    />
                </>
            ) : ( */}
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                />
            {/* )} */}
            <Button variant="outline" onClick={clearSearch}>
                Clear
            </Button>
        </div>
    );
};

export default SearchBar;
