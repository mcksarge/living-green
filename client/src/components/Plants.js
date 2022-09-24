import {useState, useEffect} from 'react';
import PlantCard from './PlantCard';

function Plants () {
    const [plants, setPlants] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        soil: "",
        image: "",
        light: "",
        water: "",
        climate: "",
        summary: ""
    })

    //Fetches Plants
    useEffect(() => {
        fetch("http://localhost:3000/plants")
        .then((res) => res.json())
        .then((data) => setPlants(data))
    }, [])

    function handleAddPlant(e) {
        fetch("http://localhost:3000/plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

            })
        })
    }

    //Maps plants to PlantCard
    const allPlants = plants.map((plant, i) => {
        return (
            <>
                <PlantCard 
                key={i}
                plant={plant}
                />
            </>
        )
    })

    return (
        <>
            <h2>Plant-O-Pedia</h2>
            <div id="plant-cont-buttons">
                <button className="plant-button">Filter</button>
                <button className="plant-button" onClick={handleAddPlant}>Add Plant</button>
                <button className="plant-button">Search</button>
            </div>
            <div id="plant-card-cont">
                {allPlants}
            </div>
        </>
    )
}

export default Plants;