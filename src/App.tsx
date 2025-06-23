import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import { store } from './store/store';
import Home from './pages/Home';
import About from './pages/About';
import './styles/App.module.scss';

export default function App() {
  return (
    <Provider store={store}>
      <nav className="app-nav">
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Provider>
  );
}
