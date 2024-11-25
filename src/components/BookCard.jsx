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
import { useToast } from '@/hooks/use-toast';


const BookCard = ({ book }) => {

    const { toast } = useToast()

    const handleFavorite = () => {
        try {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            favorites.push(book);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            toast({
                title: `${book.title} added to your favorites`,
                duration: 1500
            })
        } catch (e) {
            console.log(e)
        }
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
