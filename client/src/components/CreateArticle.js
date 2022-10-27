import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateArticle({user, addArticle}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([])

  // Shows or hides the popup window
  const handleClose = () => {
    setShow(false) 
    setErrors([])
  };
  const handleShow = () => setShow(true);

  //Resets form data
  function resetFormData(){
    setTitle("")
    setBody("")
  }

  // Add Plant to catalog
  function handleAddArticle(e) {
    const article = {"title": title, "body": body, "user_id": user.id}
    setErrors([])

    fetch('/articles', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
    })
    .then(res => {
      if (res.ok) {
        res.json().then((newArticle) => {
          addArticle(newArticle)
          handleClose()
          resetFormData()
        })
      } else {
        res.json().then(errorData => {setErrors(errorData.errors)})
      }
    })
  }

  return (
    <>
      <Button id="add-article-button" className="article-button" onClick={handleShow}>
        Create an Article
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add an Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {errors.length > 0 && (
            <ul className="errors" style={{ color: "red" }}>
            {errors.map((error) => (
                <li key={error}>{error}</li>
            ))}
            </ul>
          )}
            <form className="add-article-form">
                <div className="article-form-cont">
                    <div className="article-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Title*
                      </label>
                    </div>
                    <div className="article-form-input">
                      <input name="title" onChange={(e) => setTitle(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Article Title" />
                    </div>
                </div>
                <div className="article-form-cont">
                    <div className="article-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Body*
                      </label>
                    </div>
                    <div className="article-form-input">
                      <input name="body" onChange={(e) => setBody(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Article Body" />
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddArticle}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default CreateArticle;