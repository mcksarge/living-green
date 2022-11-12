import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useSelector} from 'react-redux';

function CreatePlant({climates, addPlant}) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("")
  const [soil, setSoil] = useState("")
  const [image, setImage] = useState("")
  const [light, setLight] = useState("")
  const [water, setWater] = useState("")
  const [climate, setClimate] = useState("")
  const [summary, setSummary] = useState("")
  const [checked, setChecked] = useState(false)
  const [errors, setErrors] = useState([])

  const user = useSelector((state) => state.user)

  // Shows or hides the popup window
  const handleClose = () => {
    setShow(false)
    setChecked(false)
  };
  const handleShow = () => setShow(true);
  /************************* */

  //Handles checkbox
  const handleChecked = () => {
    setChecked(!checked)
  }
  /***************** */

  // Resets form data
  function resetFormData() {
    setName("")
    setSoil("")
    setImage("")
    setLight("")
    setWater("")
    setClimate("")
    setSummary("")
  }
  /*************** */

  // Add Plant to catalog
  function handleAddPlant() {

    const userID = user.id
    setErrors([])
    
    if(checked) { //If checked, POST sends userID, otherwise userID is excluded
      const plant = {
        "name": name,
        "soil": soil, 
        "image": image, 
        "light": light, 
        "water": water, 
        "summary": summary,
        "user_plants_attributes": [{"user_id": userID}],
        "climate_attributes": {"name": climate.charAt(0).toUpperCase() + climate.slice(1)}
      }
      fetch('/plants', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          plant,
          userID
        })
      })
      .then(res => {
        if (res.ok) {
          res.json().then((newPlant) => {
            addPlant(newPlant)
            handleClose()
            resetFormData()
          })
        } else {
          res.json().then(errorData => {setErrors(errorData.errors)})
        }
      })
    } else {
      const plant = {
        "name": name,
        "soil": soil, 
        "image": image, 
        "light": light, 
        "water": water, 
        "summary": summary,
        "climate_attributes": {"name": climate.charAt(0).toUpperCase() + climate.slice(1)}
      }
      fetch('/plants', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({plant})
      })
      .then(res => {
        if (res.ok) {
          res.json().then((newPlant) => {
            addPlant(newPlant)
            handleClose()
            resetFormData()
          })
        } else {
          res.json().then(errorData => {setErrors(errorData.errors)})
        }
      })
    }
  }
  /**************** */

  return (
    <>
      <Button id="add-plant-button" className="plant-button" onClick={handleShow}>
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
          {errors.length > 0 && (
            <ul className="errors" style={{ color: "red" }}>
            {errors.map((error) => (
                <li key={error}>{error}</li>
            ))}
            </ul>
          )}
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
                    {/* <div className="plant-form-input">
                      <select name="summary" onChange={(e) => setClimate(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Climate (eg. Tropical)">
                        <option></option>
                        {climates.map((climate, i) => <option key={i} value={climate.id}>{climate.name}</option>)}
                      </select>
                    </div> */}
                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Or add a new climate
                    </label> */}
                    <div className="plant-form-input">
                      <input name="summary" onChange={(e) => setClimate(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Climate (eg. Tropical)" />
                    </div>
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
                <br></br>
                <div className="plant-form-cont">
                    <div className="plant-form-label-checkbox">
                      <input className="add-plant-checkbox" type="checkbox" onChange={handleChecked} />
                      <label>
                          Add this plant to your list?
                      </label>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddPlant}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default CreatePlant;