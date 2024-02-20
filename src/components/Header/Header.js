import React, { useState, useEffect, useContext } from 'react';
import './Header.css'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavIcon from '@mui/icons-material/Favorite';

import { CartContext } from '../CartContext';


const Header = ({article}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const { cartCount } = useContext(CartContext);
     
    

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
            
            <div className="left-title">{article.title}</div>
        
            
            <div className="right-menu-icons">
                
                <div className="menu-icon">
                    <FavIcon />
                </div>
                <div className="menu-icon-cart">
                    <ShoppingCartIcon />
                    <span className='cart-count'>{cartCount}</span>
                </div>

            </div>
        </div>
    );
};

export default Header;
