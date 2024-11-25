import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MainLayout from '@/layout/MainLayout';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Favorites = () => {
    // Retrieve favorites
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    });

    const { toast } = useToast()


    // remove a favorite
    const removeFavorite = (indexToRemove, book) => {
        try {
            const updatedFavorites = favorites.filter((_, index) => index !== indexToRemove);
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            toast({
                title:`${book.title} removed from favorites`,
                variant:"destructive"
            })
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <MainLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-4">My Favorites</h1>
                {favorites.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {favorites.map((book, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{book.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Author: {book.author_name?.[0]}</p>
                                    <Button
                                        variant="outline"
                                        className="mt-2"
                                        onClick={() => removeFavorite(index, book)}
                                    >
                                        Remove from Favorites
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-center">No favorites saved yet.</p>
                )}
            </div>
        </MainLayout>
    );
};

export default Favorites;
