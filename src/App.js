import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage/ProductPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/beer-app" element={<Home />} />
          <Route path=":productId" element={<ProductPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
