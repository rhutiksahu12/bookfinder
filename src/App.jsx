import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MainLayout from './layout/MainLayout';


const App = () => {
  return (
    <MainLayout>

      <Home />
    </MainLayout>
  );
};

export default App;
