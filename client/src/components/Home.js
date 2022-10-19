import {useEffect, useState} from 'react';
import UserPlantCard from './UserPlantCard';

function Home({user}) {
    const [plants, setPlants] = useState([])
    
    useEffect(() => {
        fetch('/myplants')
        .then(res => res.json())
        .then(data => setPlants(data))
    }, [])

    const listPlants = plants.map((userPlant, i) => {
        console.log(userPlant.plant)
        return (
            <>
                <UserPlantCard 
                key={i}
                userPlant={userPlant}
                />
            </>
            )
    })

    return (
        <>
            <h2>Welcome to Living Greenery!</h2>
            <p>A conjunction of useful tips and information on various plants. Living Greenery is a place where plant enthusiasts (new or old) can learn how to care for specific plants they may have or plan to get.</p>
            <br></br>
            <p><strong>What can I do here?</strong></p>
            <div id="home-summary">
                <ul>
                    <li>View the plants catalog!</li>
                    <li>Find information on plants you find, such as watering needs and sunlight recommendations!</li>
                    <li>Add new plants to the catalog if you don't find one you see there!</li>
                    <li>Add plants to your own list, and easily access them from the home page!</li>
                    <li>View and create articles for all members to enjoy!</li>
                </ul>
            </div>
            <hr></hr>
            <h2>Your Plants</h2>
            <div id="my-plant-card-cont">
                {listPlants}
            </div>

        </>
    )
}

export default Home;