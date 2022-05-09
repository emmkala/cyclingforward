import TopNav from './TopNav'

import landingBackground from '../images/TopBackground.png'
import animation from '../images/AssemblyFinal.gif'
import gallery from '../images/Gallery.png'
import topcircle from '../images/TopLeftCircle.png'

import { Link } from 'react-router-dom'

function Landing() {
    var landingSections = [Section1(), Section2(), Section3()]
    return (
        <div className="landing">
            <TopNav />
            {landingSections}
        </div>
    )
}

const Section1 = () => {
    return (
        <div className="landing-sect landing-back landing-1">
            <img className="landing-background" src={landingBackground} alt="heading_image" />
            <div className="landing-info">
                <img className="logo-animation" src={animation} alt="animation" />
                <div className="btns">
                    <Link className="btn btn-filled" to="/donation">Make a Donation.</Link>
                    <Link className="btn btn-outline" to="/request">Make a Request.</Link>
                </div>
            </div>
        </div>
    )
}

const Section2 = () => {
    return (
        <div className="landing-sect landing-2">
            <div className="content row">
                <div className="gallery-container col-6">
                    <img className="gallery-imgs" src={gallery} alt="gallery" />
                </div>
                <div className="text-container col-6">
                    <div className="background-img-container">
                        <img className="circle-img" src={topcircle} alt="background-circle" />
                    </div>
                    <div className="info">
                        <p className="italic-heading">Our Mission.</p>
                        <p className="sub-heading">Experienced Bikes. New Purpose. </p>
                        <p className="info-text">
                            At Cycling Forward, we believe in second
                            chances for everyone and everything. Working
                            with the community, local organizations and
                            individuals we are able to fix up and re-home
                            previously loved bikes with people who need
                            them free of charge. This way, we can keep
                            bikes out of the landfill and give them a second
                            life with those who may not have reliable
                            transportation, who need a fun way to exercise
                            and gain community, or who need a way to
                            spend time with friends and family.
                        </p>
                        <Link className="btn btn-filled" to="/learnmore">Learn More.</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Section3 = () => {
    return (
        <div className="landing-sect landing-3">
        </div>
    )
}

export default Landing
