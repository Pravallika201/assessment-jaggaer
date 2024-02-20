import React from 'react';
import Article from './components/Article/Article';
import data from '../resources/data/data.json';
import Header from './components/Header/Header';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import Details from './components/Details/Details';

function App() {
    

    return (
        <div className="app">
            <Header article={data.article} />
            <ButtonComponent article={data.article} images={data.article.images}/>
            <Article article1={data.article} />
            <Details data={data.article} details={data.article.features} prices={data.article.price_breaks}
                attachments={data.article.attachments} Keywords={data.article.keywords}/>
        </div>
    );
}

export default App;
