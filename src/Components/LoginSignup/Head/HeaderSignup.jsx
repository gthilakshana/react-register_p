import React, { useState, useEffect } from 'react';
import './HeaderSignup.css';

const HeaderSignup = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme; // Apply theme to the whole body
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
       
            <button onClick={toggleTheme} className="theme-toggle-btn">
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>

        
    );
}

export default HeaderSignup;