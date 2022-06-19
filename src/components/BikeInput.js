function BikeInput(props) {
    return (
        <div className="input-container">
            <select className="form-dropdown text-input"
                defaultValue="Type"
                onChange={e => props.setBikeType(e.target.value, props.bikeIndex)} >
                <option disabled>Type</option>
                <option value="Mountain"> Mountain </option>
                <option value="Road"> Road </option>
                <option value="Cruiser"> Cruiser </option>
                <option value="Hybrid"> Hybrid </option>
                <option value="Three Wheel"> Three Wheel (Tricycle) </option>
            </select>
            <select className="form-dropdown text-input"
                defaultValue="Age Range"
                onChange={e => props.setBikeAgeRange(e.target.value, props.bikeIndex)} >
                <option disabled>Age Range</option>
                <option value="Child"> Child </option>
                <option value="Youth"> Youth </option>
                <option value="Adult"> Adult </option>
            </select>
        </div>
   )
}

export default BikeInput