

function PlantCard({plant}) {

    function handleClick() {
        console.log(plant.name)
    }

    return (
        <div className="plant-card" onClick={handleClick}>
            <img className="plant-card-img" src={plant.image}></img>
            <h4>{plant.name}</h4>
        </div>
    )
}

export default PlantCard;