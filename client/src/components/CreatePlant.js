import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreatePlant({climates, addPlant}) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("")
  const [soil, setSoil] = useState("")
  const [image, setImage] = useState("")
  const [light, setLight] = useState("")
  const [water, setWater] = useState("")
  const [climate, setClimate] = useState("")
  const [summary, setSummary] = useState("")

  // Shows or hides the popup window
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add Plant to catalog
  function handleAddPlant(e) {
    const plant = {"name": name, "soil": soil, "image": image, "light": light, "water": water, "climate_id": climate, "summary": summary}
    
    fetch('http://localhost:3000/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plant)
    })
    .then((res) => res.json())
    .then((newPlant) => addPlant(newPlant))
    handleClose()
  }


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
                    <div className="plant-form-input">
                      <input name="name" onChange={(e) => setName(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Plant Name" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                          Soil*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input name="soil" onChange={(e) => setSoil(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Soil Type" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Image URL*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input name="image" onChange={(e) => setImage(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Image of plant" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Light*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input name="light" onChange={(e) => setLight(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Sunlight requirement" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Water*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input name="water" onChange={(e) => setWater(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Water requirement" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Climate*
                    </label>
                    <br></br>
                    <select name="climate" onChange={(e) => setClimate(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option></option>
                      {climates.map((climate, i) => <option key={i} value={climate.id}>{climate.name}</option>)}
                    </select>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                          Summary*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input name="summary" onChange={(e) => setSummary(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="A brief description" />
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddPlant}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default CreatePlant;