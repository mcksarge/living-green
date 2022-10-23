import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ArticleCard ({article}) {
    const [show, setShow] = useState(false);
    // Shows or hides the popup window
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    

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
                <h5>Author: {article.user.name}</h5>
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

export default ArticleCard;