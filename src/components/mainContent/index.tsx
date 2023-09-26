import React, {useEffect} from 'react';
import {useState, useContext} from 'react';
import useFetch from '../../hooks/useFetchNews'
import './style.css';
import api from '../../utils/api'
import ArticleComponent from '../articleComponent'
import CommentForm from '../commentForm'
import {string} from "yup";

function MainContent() {
    const {data,loading,error} = useFetch(api.userUrl, 'test', 'tests');
    let {
        firstNine,
        created
    } = data;

    const [articles, setArticles] = useState(() => {
        return data.firstNine;
    });

    useEffect(()=> {
        setArticles(data.firstNine);
    }, [articles, data])


    const [selectedArticle, setSelectedArticle] = useState('');

    const handleItemClick = (newsId: string) => {
        setSelectedArticle(newsId);
    }

    return (
        <main>
            <section className="news">
                <div className='news-header'>
                    <h1>News</h1>
                </div>
                <div className='news-container'>
                    {articles && articles.map((newsId: number) => {
                        // @ts-ignore
                        return <ArticleComponent
                            key={newsId}
                            newsId={newsId}
                            handleItemClick={handleItemClick}
                            selectedArticle={selectedArticle}
                        >

                        </ArticleComponent>
                    })}
                </div>
            </section>
            <section className="find-out-more">
                <div>
                    <p>Find out more at <a href="https://www.people.com">www.people.com</a></p>
                </div>
            </section>
            <section>
                <CommentForm
                    userId={created}
                    articleId={selectedArticle}
                />
            </section>
        </main>
    );
}

export default MainContent;
