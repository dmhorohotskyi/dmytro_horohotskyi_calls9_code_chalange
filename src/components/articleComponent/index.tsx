import React from 'react';
import {useState, useContext} from 'react';
import useFetchArticles from '../../hooks/fetchArticle'
import './style.css';
import api from '../../utils/api'
import RandomImage from '../randomImage'

function ArticleComponent(props: any) {
    const {
        newsId,
        handleItemClick,
        selectedArticle
    } = props;

    const url = api.getArticleUrl(newsId);
    const {data, loading, error} = useFetchArticles(newsId);

    const {
        text
    }= data;

    const onClick = () => {
        handleItemClick(newsId);
    }

    const itemClasses = selectedArticle === newsId
        ? 'item selected'
        : 'item';

    return (

        <div className={itemClasses} onClick={onClick}>
            <RandomImage />
            <div className='item-text'>
                <h2><a href="#">Lorem ipsum dolor sit amet</a></h2>
                <p>{text} orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus, nibh vel mollis
                    mollis, elit arcu luctus est, a efficitur sapien nunc sed magna.</p>
                <div className='tag-container'>
                    <small>Tag 1</small>
                    <small>Tag 2</small>
                </div>
            </div>
        </div>
    );
}

export default ArticleComponent;
