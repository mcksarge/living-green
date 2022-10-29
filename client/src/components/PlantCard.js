import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function PlantCard({user, plant, onDeletePlant}) {
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState([])
    const [buttonText, setButtonText] = useState("Add to your list")
  

    // Shows or hides the popup window
    const handleClose = () => {
        setShow(false)
        setButtonText("Add to your list")
    };
    const handleShow = () => setShow(true);

    // Deletes plant
    function handleDelete() {
        fetch(`/plants/${plant.id}`, {
            method: "DELETE"
        })
        .then((res) => {
            if(res.ok){
                onDeletePlant(plant.id)
                handleClose()
            }
        })
    }
    /********************* */

    //Adds plant to users plant list
    function handleAdd() {

        const userPlant = {"user_id": user.id, "plant_id": plant.id}

        fetch('/myplants/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userPlant)
        })
        .then(res => {
            if(res.ok){
                res.json().then(() => setButtonText("Added!"))
            } else {
                res.json().then(errorData => setErrors(errorData.errors))
            }
        })
    }
    /****************** */

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
                                    {plant.climate.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                {errors.length > 0 && (
                    <ul className="errors_userPlant" style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                    </ul>
                )}
                    <Button onClick={handleAdd}>
                        {buttonText}
                    </Button>
                    <Button className="plant-info-delete-btn" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        )
  
}

export default PlantCard;