import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';


const SearchBar = ({ searchTerm, authorTerm, setSearchTerm, setAuthorTerm }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <div className="flex flex-col w-full">
                {/* <label htmlFor="title" className="text-sm mb-1">Book Title</label> */}
                <Input
                    id="title"
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-full">
                {/* <label htmlFor="author" className="text-sm mb-1">Author</label> */}
                <Input
                    id="author"
                    type="text"
                    placeholder="Search by author..."
                    value={authorTerm}
                    onChange={(e) => setAuthorTerm(e.target.value)}
                />
            </div>
            <div>
                <Button
                    variant="outline"
                    onClick={() => {
                        setSearchTerm('');
                        setAuthorTerm('');
                    }}
                >
                    Clear
                </Button>
            </div>
        </div>
    );
};

export default SearchBar;
