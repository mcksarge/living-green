import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function UserPlantCard({plant}) {
    const [show, setShow] = useState(false);

    // Shows or hides the popup window
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(plant.climate)


    return (
        <>
            <div className="plant-card" onClick={handleShow}>
                <img className="plant-card-img" alt={plant.name} src={plant.image}></img>
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
                        <div className="plant-info-img-cont">
                            <img src={plant.image} alt={plant.name} className="plant-info-img"></img>
                        </div>
                    </div>
                    <br></br>
                    <div className="plant-info-summary">
                        <p className="plant-summary" >
                            {plant.summary}
                        </p>
                    </div>
                    <br></br>
                    <div className="plant-info">
                        <h4>Light requirements:</h4>
                        <div className="plant-info-light">
                            <p className="plant-light">
                                {plant.light}
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="plant-info">
                        <h4>Watering recommendations:</h4>
                        <div className="plant-info-water">
                            <p className="plant-water">
                                {plant.water}
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="plant-info">
                        <h4>Soil recommendations:</h4>
                        <div className="plant-info-soil">
                            <p className="plant-soil">
                                {plant.soil}
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="plant-info">
                        <h4>Native Climate:</h4>
                        <div className="plant-info-climate">
                            <p className="plant-climate">
                                {plant.climate_id}
                            </p>
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

export default UserPlantCard;