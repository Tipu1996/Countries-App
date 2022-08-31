import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './ThemeBar.css';

const ThemeBar = () => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/salads">
                Salads
            </a>
            <a className="menu-item" href="/pizzas">
                Pizzas
            </a>
            <a className="menu-item" href="/desserts">
                Desserts
            </a>
        </Menu>
    );
};

export default ThemeBar