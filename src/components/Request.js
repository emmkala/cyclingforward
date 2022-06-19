import TopNav from './TopNav'
import BikeInput from './BikeInput'

import { useState, useCallback } from 'react'

const initialList = {
    "id": "0",
    "type": "",
    "ageRange": "",
    "filled": false,
    "timeRequested": 0
};

function Request() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [isDropOff, setDropOff] = useState(true);
    const [location, setLocation] = useState("");
    const [organization, setOrganization] = useState("");

    const [reqs, setReqs] = useState([initialList]);

    const [isOrg, setIsOrg] = useState(false);

    const setBikeType = useCallback(
        (bikeType, bikeIndex) => {
            const updateReqs = reqs.map((bike) => {
                if (parseInt(bike.id) === bikeIndex) {
                    bike.type = bikeType;
                }
                return bike;
            });
            setReqs(updateReqs);
        },
        [reqs]
    );

    const setBikeAgeRange = useCallback(
        (bikeAgeRange, bikeIndex) => {
            const updateReqs = reqs.map((bike) => {
                if (parseInt(bike.id) === bikeIndex) {
                    bike.ageRange = bikeAgeRange;
                }
                return bike;
            });
            setReqs(updateReqs);
        },
        [reqs]
    );

    const addBikeForm = useCallback(
        (e) => {
            e.preventDefault();
            setReqs((reqs) => {
                const newReqId = parseInt(reqs[reqs.length - 1].id) + 1;
                return [...reqs, { id: newReqId.toString(), type: "", ageRange: "", filled: false, timeRequested: 0 }];
            });
        },
        [setReqs]
    );

    const submitRequests = async (e) => {
        e.preventDefault();
        const requestInfo =
        {
            "id": "",
            "requestInfo": reqs,
            "userRequesting": {
                "id": "",
                "firstName": name,
                "contactInfo": contact,
                "location": location,
                "organization": organization,
                "dropOff": isDropOff
            }
        };

        await fetch('/api/Request', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestInfo)
        }).then(() => {
            window.location.href = '/confirmation/request'
        }).catch(e => console.log(e))
    }

    return (
        <div className="bike-form-container donate-form-one">
            <TopNav navtype="solid-nav" />
            <div className="bike-form request-info">
                <p className="form-title donation-title"> Request a Bike. </p>
                <p className="form-content donation-content">
                    If you need a bike for yourself, a family member or a friend, submit a request below. We receive all our bikes
                    by donation so stock is limited and always changing. The requests are processed first come, first serve
                    so if we don't have a type of bike you're requesting you'll be the first in line when one comes in.
                </p>
                <div className="card form-card">
                    <form className="donate-form-container row" onSubmit={submitRequests}>
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
                                <p> Do you represent an organization?</p>
                                <div className="radio-btns">
                                    <input className="radio-input" type="radio" name="isOrganization" onChange={e => setIsOrg(true)} />
                                    <label className="radio-label"> Yes</label>
                                    <input className="radio-input" type="radio" name="isOrganization" onChange={e => setIsOrg(false)} />
                                    <label className="radio-label"> No</label>
                                </div>
                                <input className={`form-input text-input ${!isOrg ? "d-none" : ""}`} type="text" placeholder="Organization Name" value={organization} onChange={e => setOrganization(e.target.value)} />
                            </div>
                        </div>
                        <div className="donate-form right-fields col-6" id="bike-input">
                            <p className="input-title">Bike Info.</p>
                            {reqs.map((item, i) => (
                                <div className="bike-input" {...i == 0 ? { id: "first" } : {}} key={i}>
                                    <BikeInput bikeIndex={i} setBikeType={setBikeType} setBikeAgeRange={setBikeAgeRange} />
                                </div>
                            ))}
                            <button className="add-bike-btn" onClick={addBikeForm}>
                                <i class="fa-solid fa-circle-plus"></i> Add A Bike
                            </button>
                        </div>
                        <input type="submit" className="btn submit-btn" value="Submit" />
                    </form>
                </div>
            </div>
            <div className="background-rect"></div>
        </div>
    )
}


export default Request