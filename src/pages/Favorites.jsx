import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MainLayout from '@/layout/Main.Layout';
import React from 'react';


const Favorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

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
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p>No favorites saved yet.</p>
                )}
            </div>
        </MainLayout>
    );
};

export default Favorites;
