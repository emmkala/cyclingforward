import React, { useState } from 'react';

function App() {
    const [bikes, setBikes] = useState([])

    /*const submitBike = async () => {
        const hardCodedBike = {
            type: "Road",
            location: "Halifax",
            costs: 0.00
        }

        const result = await fetch('api/Bikes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(hardCodedBike)
        })

        const jsonRes = await result.json()
        console.log(jsonRes)
    }*/

    return (
        <div className="db-test">
            <button onClick={submitBike}>Add Bike</button>
        </div>
    )
}

export default App