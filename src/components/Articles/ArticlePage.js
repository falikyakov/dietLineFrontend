import React, { useState, useEffect } from 'react'
import Article from './Article';


const ArticlePage = () => {

    const [articles, setArticles] = useState({});

    useEffect(() => {
        fetchArticles();
      
    }, [])


    const fetchArticles = async () => {
        const details = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=fitness&api-key=${process.env.REACT_APP_NYT_APP_KEY}`);
        const data = await details.json();
        setArticles(data);
        articles &&
        console.log(articles);
    }

    return (
        <div>
            {
                articles.response &&
                articles.response.docs &&
                articles.response.docs.map((article, index) => {
                    const pubDate = new Date(article.pub_date);
                    const thisDate = pubDate.getDate() + "/" + (pubDate.getMonth() + 1) + "/" + pubDate.getFullYear();
                    return <Article key={index} date={thisDate} title={article.headline.main} text={article.lead_paragraph} web_url={article.web_url} />
                })
            }
        </div>
    )
}

export default ArticlePage
