import {useState, useEffect} from 'react';
import PlantCard from './PlantCard';
import CreatePlant from './CreatePlant';

function Plants () {
    const [plants, setPlants] = useState([])

    //Fetches Plants
    useEffect(() => {
        fetch("http://localhost:3000/plants")
        .then((res) => res.json())
        .then((data) => setPlants(data))
    }, [])

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
                <CreatePlant />
                <button className="plant-button">Search</button>
            </div>
            <div id="plant-card-cont">
                {allPlants}
            </div>
        </>
    )
}

export default Plants;