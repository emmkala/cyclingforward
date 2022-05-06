import TopNav from './TopNav'

import landingBackground from '../images/TopBackground.png'
import animation from '../images/AssemblyFinal.gif'

import { Link } from 'react-router-dom'

function Landing() {
    var landingSections = [Section1()]
    return (
        <div className="landing">
            <TopNav />
            {landingSections}
        </div>
    )
}

const Section1 = () => {
    return (
        <div className="landing-1">
            <img className="landing-background" src={landingBackground} alt="heading_image" />
            <div className="landing-info">
                <img className="logo-animation" src={animation} alt="animation" />
                <div className="btns">
                    <Link className="btn-filled" to="/donation">Make a Donation.</Link>
                    <Link className="btn-trans" to="/request">Make a Request.</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing
