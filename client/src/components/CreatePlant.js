import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreatePlant() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    soil: "",
    image: "",
    light: "",
    water: "",
    climate: "",
    summary: ""
})


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add Plant to catalog
  function handleAddPlant(e) {
    console.log(formData)
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
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                          Name*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Plant Name" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                          Soil*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" placeholder="Soil Type" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                          Image*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" placeholder="Image of plant" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                          Light*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" placeholder="Sunlight requirement" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                          Water*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" placeholder="Water requirement" />
                    </div>
                </div>
                <div className="plant-form-cont">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Climate
                    </label>
                    <br></br>
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                </div>
                <div className="plant-form-cont">
                    <div className="plant-form-label">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                          Summary*
                      </label>
                    </div>
                    <div className="plant-form-input">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" placeholder="A brief description" />
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