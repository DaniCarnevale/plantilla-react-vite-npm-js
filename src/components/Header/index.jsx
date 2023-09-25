// Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = ({ title = "Mi Aplicación" }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="app-header">
            <h1 className="header-title">{title}</h1>
            <div className="menu-toggle" onClick={() => setMenuOpen(!isMenuOpen)}>
                ☰
            </div>
            <div className={`menu-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
            <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="close-menu" onClick={() => setMenuOpen(false)}>✖</div>
                <a href="#home">Inicio</a>
                <a href="#about">Acerca de</a>
                <a href="#services">Servicios</a>
                <a href="#contact">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;


/* Asi llamamos al Header
 <Header title="Mi Gran Aplicación" subtitle="Creando cosas increíbles" />
*/