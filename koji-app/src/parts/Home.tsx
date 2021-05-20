import { Link } from 'react-router-dom'
import React from 'react';

interface HomeProps {
    articles:
    [
        {
            userId: number,
            id: number,
            title: string,
            body: string
        }
    ]
}


// display welcome page
const Home:React.FC<HomeProps> = (props: any) => {
    return (
        <div><h1>Home</h1>

            {props.articles.map((articleData: any) => {
                const articlePath = `/article/${articleData.id}`

                const element = (<div className="articleData">
                    <Link className="links" to={articlePath}>{articleData.title}</Link>
                    <p>written By : {articleData.userId}</p>

                </div>

                )
                return element
            })}
        </div>
    )
}

export default Home