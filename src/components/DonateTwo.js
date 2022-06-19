import TopNav from './TopNav'
import BikeInput from './BikeInput'

import { useState, useCallback } from 'react'

import toolbox from '../images/ToolBox.png'
import donateBike from '../images/FixedBike.png'

const initialList = {
    "id": "0",
    "type": "",
    "ageRange": "",
    "status": "pending",
    "costs": 0
};

function DonateTwo() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [isDropOff, setDropOff] = useState(true);
    const [location, setLocation] = useState("");

    const [bikes, setBikes] = useState([initialList]);

    const setBikeType = useCallback(
        (bikeType, bikeIndex) => {
            const updateBikes = bikes.map((bike) => {
                if (parseInt(bike.id) === bikeIndex) {
                    bike.type = bikeType;
                }
                return bike;
            });
            setBikes(updateBikes);
        },
        [bikes]
    );

    const setBikeAgeRange = useCallback(
        (bikeAgeRange, bikeIndex) => {
            const updateBikes = bikes.map((bike) => {
                if (parseInt(bike.id) === bikeIndex) {
                    bike.ageRange = bikeAgeRange;
                }
                return bike;
            });
            setBikes(updateBikes);
        },
        [bikes]
    );

    const addBikeForm = useCallback(
        (e) => {
            e.preventDefault();
            setBikes((bikes) => {
                const newBikeId = parseInt(bikes[bikes.length - 1].id) + 1;
                return [...bikes, { id: newBikeId.toString(), type: "", ageRange: "", status: "pending", costs: 0 }];
            });
        },
        [setBikes]
    );

    const submitDonation = async (e) => {
        e.preventDefault();
        const donationInfo = 
        {
            "id": "",
            "bikeDonations": bikes,
            "userDonating": {
                "id": "",
                "firstName": name,
                "contactInfo": contact,
                "location": location,
                "dropOff": isDropOff
            }
        };

        await fetch('/api/Donation', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(donationInfo)
        }).then(() => {
            window.location.href = '/confirmation/donation'
        })
    }

    return (
        <div className="bike-form-container donate-form-one">
            <TopNav navtype="solid-nav" />
            <div className="bike-form donate-two-info">
                <p className="form-title donation-title"> Donate a Bike. </p>
                <p className="form-content donation-content">
                    We take bikes of any type, age range, condition, from anywhere in Nova Scotia. All we need is the best way to
                    contact you, your location, pick up preference and a little information about your bike. You can donate
                    as many as you want, and we'll contact you for more information.
                </p>
                <div className="card form-card">
                    <form className="donate-form-container row" onSubmit={ submitDonation }>
                        <div className="donate-form left-fields col-6">
                            <p className="input-title">Your Info.</p>
                            <div className="input-container">
                                <input className="form-input text-input" type="text" placeholder="First Name" value={name} onChange={e => setName(e.target.value)} />
                                <input className="form-input text-input" type="text" placeholder="Email or Phone Number" value={contact} onChange={e => setContact(e.target.value)} />
                                <div className="radio-btns">
                                    <input className="radio-input" title="We come to you!" type="radio" name="isDropOff" value={isDropOff} onChange={e => setDropOff(false)} />
                                        <label className="radio-label" title="We come to you!"> Pick Up </label>
                                    <input className="radio-input" title="You come to us!" type="radio" name="isDropOff" value={isDropOff} onChange={e => setDropOff(true)} />
                                        <label className="radio-label" title="You come to us!"> Drop Off </label>
                                </div>
                                <input className="form-input text-input" type="text" placeholder="City" value={location} onChange={e => setLocation(e.target.value)} />
                            </div>
                        </div>
                        <div className="donate-form right-fields col-6" id="bike-input">
                            <p className="input-title">Bike Info.</p>
                            {bikes.map((item, i) => (
                                <div className="bike-input" {...i == 0 ? { id: "first" } : {}} key={i}>
                                    <BikeInput bikeIndex={i} setBikeType={setBikeType} setBikeAgeRange={setBikeAgeRange}/>
                                </div>
                            ))}
                            <button className="add-bike-btn" onClick={addBikeForm}>
                                <i class="fa-solid fa-circle-plus"></i> Add A Bike
                            </button>
                        </div>
                        <input type="submit" className="btn submit-btn" value="Submit"/>
                    </form>
                </div>
            </div>
            <div className="background-rect"></div>
        </div>
    )
}

export default DonateTwo