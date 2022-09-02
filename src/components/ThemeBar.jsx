import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './ThemeBar.css';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';

const ThemeBar = () => {
    const { toggleTheme, theme } = useContext(ThemeContext)
    return (
        <div className='ThemeBar'>
            <Menu width={'20%'}>
                <div className='switch'>
                    <h3>Change Theme</h3>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "light" ? false : true} />
                </div>
            </Menu>
        </div>
    );
};

export default ThemeBar