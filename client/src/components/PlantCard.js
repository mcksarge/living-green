import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function PlantCard({plant}) {
    const [show, setShow] = useState(false);

    // Shows or hides the popup window
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="plant-card" onClick={handleShow}>
                <img className="plant-card-img" src={plant.image}></img>
                <h4>{plant.name}</h4>
            </div>
    
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>{plant.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="plant-info-cont">
                    <div className="plant-info">
                        <div className="plant-info-name">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                {plant.name}
                            </label>
                        </div>
                    </div>
                    <div className="plant-info">
                        <div className="plant-info-soil">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                {plant.soil}
                            </label>
                        </div>
                    </div>
                    <div className="plant-info">
                        <div className="plant-info-img-cont">
                            <img src={plant.image} className="plant-info-img"></img>
                        </div>
                    </div>
                    <div className="plant-info">
                        <div className="plant-info-light">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                {plant.light}
                            </label>
                        </div>
                    </div>
                    <div className="plant-info">
                        <div className="plant-info-water">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                {plant.water}
                            </label>
                        </div>
                    </div>
                    <div className="plant-info">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            {plant.climate}
                        </label>
                    </div>
                    <div className="plant-info">
                        <div className="plant-info-summary">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                {plant.summary}
                            </label>
                        </div>
                    </div>
                </div>
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

export default PlantCard;