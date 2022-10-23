import {useState, useEffect} from "react";
import ArticleCard from "./ArticleCard";
import CreateArticle from "./CreateArticle";

function Articles ({user}) {
    const [articles, setArticles] = useState([])
    const [refresh, setRefresh] = useState([true])

    useEffect(() => {
        fetch('/articles')
        .then((res) => res.json())
        .then((data) => setArticles(data))
        setRefresh(false)
    }, [refresh])

    function onArticleChange(){
        setRefresh(true)
      }
    


    const allArticles = articles.map((article, i) => {
        return (
            <>
                <ArticleCard
                    key={i}
                    article={article}
                    user={user}
                    onDeleteArticle={onArticleChange}
                />
            </>
        )
    })

    return (
        <>
            <h2>Seeds of Information</h2>
            <div id="create-article-btn-cont">
                <CreateArticle user={user} addArticle={onArticleChange} />
            </div>
            <br></br>
            <div id="articles-cont">
                {allArticles}
            </div>
        </>
    )
}

export default Articles;