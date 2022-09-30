import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewPlant({climates, addPlant}) {
  const [show, setShow] = useState(false);

  // Shows or hides the popup window
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a Plant
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="add-plant-form">
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Name*
                      </label>
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                          Soil*
                      </label>
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Image URL*
                      </label>
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Light*
                      </label>
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Water*
                      </label>
                    </div>
                </div>
                <div className="plant-form-cont">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Climate*
                    </label>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Summary*
                      </label>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ViewPlant;