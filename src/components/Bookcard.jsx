import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button';


const BookCard = ({ book }) => {
    const handleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites.push(book);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="w-full h-40 object-cover mb-2"
                />
                <p className="text-sm">Author: {book.author_name?.[0]}</p>
                <Button variant="default" onClick={handleFavorite}>
                    Add to Favorites
                </Button>
            </CardContent>
        </Card>
    );
};

export default BookCard;
