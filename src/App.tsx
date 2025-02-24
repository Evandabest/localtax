import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

// Create your page components
const Home = () => <h2 className='text-amber-600'>Home Page</h2>;

// Main App component with navigation
export const App = () => (
  <HashRouter>
    <div>
      <nav>
        <Link to="/">Home</Link> |
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </HashRouter>
);

const root = createRoot(document.body);
root.render(<App />);
