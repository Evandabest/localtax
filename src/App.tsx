import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Home from './pages/home';
import Upload from './pages/upload';
import Chat from './pages/chat';

// Create your page components

// Main App component with navigation
export const App = () => (
  <HashRouter>
    <div className='flex flex-col w-full'>
      <nav className='items-center justify-center w-full'>
        <NavBar/>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element = {<Upload/>} />
        <Route path = "/chat" element = {<Chat/>} />
      </Routes>
    </div>
  </HashRouter>
);

const root = createRoot(document.body);
root.render(<App />);
