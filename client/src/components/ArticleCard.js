import {useState, useEffect} from "react";


function ArticleCard ({article}) {
    
    

    return (
        <div className="article-card-title">
            <h2>{article.title}</h2>
        </div>
    )
}

export default ArticleCard;