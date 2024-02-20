import React from 'react';
import './Article.css';

const Article = ({ article1 }) => {
    return (
        <div className="article">
            <h4>DESCRIPTION</h4>
            
            <p>{article1.description_long}</p>
            
        </div>
    );
};

export default Article;