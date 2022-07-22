import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/beer-app" element={<Home />} />
        <Route path=":productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
