import './ButtonComponent.css';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import StarIcon from '@mui/icons-material/Star';

const ButtonComponent = ({article,images}) => {
    const { incrementCartCount } = useContext(CartContext);

    const handleClick = () => {
        incrementCartCount();
    };

    return (
        <div>
            <div className='button-component'>
            <div className='row'>
            <div className="column">
                {images.slice(0, 2).map((image, index) => (
                    <img className='small' key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
            <div className='column'>
                {images.slice(2).map((image, index) => (
                    <img  className="images" key={index + 2} src={image} alt={`Image ${index + 3}`} />
                ))}
            </div>
        </div>
        
            {/* <div className='images-small'>
                <div className='small'><img {...article.images[0]}/></div>
                
                <div className='small'><img {...article.images[1]}/></div>
            </div>
            <div className='images'>
                <img {...article.images[3]}/>
            </div> */}
            <div>
                <h4>{article.title}</h4>
                <p>by <span className='sint'>Supplier expetaur sint</span></p>
                <div>
                    <StarIcon style={{ color: 'orange', fill: 'orange' }} />
                    <StarIcon style={{ color: 'orange', fill: 'orange' }} />
                    <StarIcon style={{ color: 'orange', fill: 'orange' }} />
                    <StarIcon style={{ color: 'lightgrey', fill: 'lightgrey'}} />
                    <StarIcon style={{ color: 'lightgrey', fill: 'lightgrey'}} />
                </div>
                <h4>{article.price} {article.currency} <span className='ship'>+ 34,00 EUR shipping</span></h4>
                <p>all prices incl. 10% taxes</p>
                <button className='button' onClick={handleClick}>Add to Cart</button>
            </div>
            
            </div>
            
        </div>
        
    );
};

export default ButtonComponent;


