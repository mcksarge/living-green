import {useState, useEffect} from 'react';
import PlantCard from './PlantCard';
import CreatePlant from './CreatePlant';


function Plants () {
    const [plants, setPlants] = useState([])
    const [climates, setClimates] = useState([])
    const [refreshPlants, setRefreshPlants] = useState(true)
    const [query, setQuery] = useState("")

    //Fetches Plants
    useEffect(() => {
        fetch("http://localhost:3000/plants")
        .then((res) => res.json())
        .then((data) => setPlants(data))
        setRefreshPlants(false)
    }, [refreshPlants])

    // Fetches climates for dropdown selection
    useEffect(() => {
        fetch("http://localhost:3000/climates")
        .then((res) => res.json())
        .then((data) => {
            setClimates(data)
        })
    }, [])

    // Handles delete plant
    function handleDeletePlant(deletedPlant) {
        const updatedPlants = plants.filter((plant) => plant.id !== deletedPlant)
        setPlants(updatedPlants)
    }

    //Refreshes new plants
    function addPlant() {
        setRefreshPlants(true)
    }

    //Sorts plants
    function handleSort(e) {
        if (e.target.value == "A-Z") {
            const sortedPlants = [...plants].sort((a, b) => {
                return a.name > b.name ? 1 : -1
            })
            setPlants(sortedPlants)
        } else if (e.target.value =="Z-A") {
            const sortedPlants = [...plants].sort((a, b) => {
                return a.name < b.name ? 1 : -1
            })
            setPlants(sortedPlants)
        }
    }

    //Maps plants to PlantCard
    const allPlants = plants.filter((plant) => {
        if (query == ""){
            return plant
        } else if (plant.name.toLowerCase().includes(query.toLowerCase())){
            return plant
        }
    }).map((plant, i) => {
        return (
            <>
                <PlantCard 
                key={i}
                plant={plant}
                onDeletePlant={handleDeletePlant}
                />
            </>
        )
    })



    return (
        <>
            <h2>Plant-O-Pedia</h2>
            <div id="plant-cont-buttons">
                <CreatePlant climates={climates} addPlant={addPlant} />
            </div>
            <div id="plant-search-cont">
                <input id="plant-search" placeholder='Search' onChange={event => setQuery(event.target.value)}></input>
                <label id="plant-sort">Sort by:</label>
                <select onChange={handleSort}>
                    <option>A-Z</option>
                    <option>Z-A</option>
                </select>
            </div>
            <div id="plant-card-cont">
                {allPlants}
            </div>
        </>
    )
}

export default Plants;