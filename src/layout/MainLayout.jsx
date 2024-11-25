import Navbar from '@/components/Navbar'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <Navbar />
                {children}
            </div>
        </>
    )
}

export default MainLayout