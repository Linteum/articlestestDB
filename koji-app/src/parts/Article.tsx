import { Link } from 'react-router-dom'
import React from 'react';

interface ArticleProps {
    article: {
        userId: number,
        id: number,
        title: string,
        body: string
    }

}

// display article page from fetched data
const Article: React.FC<ArticleProps> = (props) => {
    console.log("props :", props)

    return (
        <div className="main-Article">
            <p >< Link  className="links home-button" to="/">home</Link></p>
            <h1>{props.article.title}</h1>
            <br></br>
            <p>{props.article.body}</p>
            <br></br>
            <p>written by {props.article.userId}</p>
        </div>

    )
}

export default Article