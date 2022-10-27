import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ArticleCard ({article, user, onDeleteArticle, onRefresh}) {
    const [show, setShow] = useState(false);
    const [author, setAuthor] = useState(article.user.name)
    const [body, setBody] = useState(article.body)
    const [title, setTitle] = useState(article.title)
    const [errors, setErrors] = useState([])


    // Shows or hides the popup window
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handleDelete() {
        fetch(`/articles/${article.id}`, {
            method: "DELETE"
        })
        .then((res) => {
            if(res.ok){
                onDeleteArticle(article.id)
                handleClose()
            }
        })

    }

     //Changes Article
     function handleSubmit(){
        let updatedArticle = {title, body}

    

        fetch(`/articles/${article.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedArticle)
        })
        .then(res => res.json())
        handleClose()
        onRefresh()
    }

    
    // If current user matches author, can delete article
    if(user.id == article.user_id){
        return (
            <>
                <div className="article-card-link" onClick={handleShow}>
                    <h4>{article.title}</h4>
                </div>
        
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title><input onChange={(e) => setTitle(e.target.value)} value={title}></input></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {errors.length > 0 && (
                    <ul className="errors" style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                    </ul>
                )}
                    <h5>Author: {article.user.name}</h5>
                    <textarea className="article-edit-body-cont" onChange={(e) => setBody(e.target.value)} value={body} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSubmit}>
                        Save Changes
                    </Button>                    
                    <Button variant="secondary" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <div className="article-card-link" onClick={handleShow}>
                    <h4>{article.title}</h4>
                </div>
        
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Author: {author}</h5>
                    <p>{article.body}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    }
        
}

export default ArticleCard;