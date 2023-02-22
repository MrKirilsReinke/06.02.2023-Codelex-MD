import React from 'react';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Characters from './pages/Characters/Characters';
import Character from './pages/Character/Character';
import style from './App.scss';

function App() {

    return (
        <div className="appContainer">
            <nav className="nav">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/characters" className="nav-item">Characters</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/character/:id" element={<Character />} />

                
                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>

        </div>
    );
}

export default App;
