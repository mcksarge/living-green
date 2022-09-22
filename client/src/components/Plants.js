import {useState, useEffect} from 'react';

function Plants () {

    useEffect(() => {
        fetch("http://localhost:3000/plants")
        .then((res) => res.json())
        .then((data) => console.log(data))
    }, [])

    return (
        <>
            <h2>Plant-O-Pedia</h2>
        </>
    )
}

export default Plants;