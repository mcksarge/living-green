import {useState, useEffect} from "react";
import ArticleCard from "./ArticleCard";

function Articles () {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('/articles')
        .then((res) => res.json())
        .then((data) => setArticles(data))
    }, [])

    const allArticles = articles.map((article, i) => {
        return (
            <>
                <ArticleCard
                    key={i}
                    article={article}
                />
            </>
        )
    })

    return (
        <>
            <h2>Articles</h2>
            <div id="articles-cont">
                {allArticles}
            </div>
        </>
    )
}

export default Articles;