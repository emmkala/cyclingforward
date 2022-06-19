import TopNav from './TopNav'
import Footer from './Footer'

import { Link } from 'react-router-dom'
import { Animator, ScrollContainer, ScrollPage, MoveIn } from "react-scroll-motion";

import landingBackground from '../images/TopBackground.png'
import animation from '../images/AssemblyFinal.gif'
import gallery from '../images/Gallery.png'
import topcircle from '../images/TopLeftCircle.png'
import landing3back from '../images/HowItWorksBackground.png'
import bikelogo from '../images/FinalLogo_Dark.png'
import hammerCircle from '../images/HammerCircle.png'
import bikeCircle from '../images/BikeCircle.png'
import handHeartCircle from '../images/HandHeartCircle.png'
import bottomCircle from '../images/BottomLeftCircle.png'
import quotes from '../images/Quotes.png'
import circleGlassesAvatar from '../images/CircleGlasses.png'
import dumbGlassesAvatar from '../images/DumbGlasses.png'
import moustacheAvatar from '../images/Mustache.png'
import strapsAvatar from '../images/Straps.png'
import landing5back from '../images/PartnersBackground.png'
import kidBike from '../images/KidDadBottom.png'

function Landing() {
    var landingSections = [Section1(), Section2(), Section3(), Section4(), Section5(), Section6()]
    return (
        <div className="landing">
            <TopNav navtype='changing-nav'/>
            {landingSections}
            <Footer />
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
        <div className="landing-sect landing-back landing-3">
            <div className="bike-animation">
                <ScrollContainer snap="none">
                    <ScrollPage page={2}>
                        <Animator animation={MoveIn(-400, 0)}>
                            <img className="moving-bike forwards" src={bikelogo} alt="background_image" />
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            </div>
            <img className="landing-background landing3-background" src={landing3back} alt="background_image" />
            <div className="info">
                <div className="text-container">
                    <p className="italic-heading underlined">How It Works.</p>
                    <p className="sub-heading">Community Lead. Community Supported.</p>
                </div>
                <div className="sections-container row">
                    <div className="info-sect-cont col-4">
                        <img className="top-div donation-img" src={handHeartCircle} alt="dontate" />
                        <div className="info-sect donations-sect">
                            <p className="sub-heading"> Donations. </p>
                            <p className="info-text">
                                We receive donations of
                                used bikes from generous
                                people all around
                                Nova Scotia. These bikes
                                can be any type, age range
                                and in any condition.</p>
                            <Link className="btn btn-filled" to="/donate">Donate a Bike.</Link>
                        </div>
                    </div>
                    <div className="info-sect-cont col-4">
                        <img className="top-div repair-img" src={hammerCircle} alt="reapir" />
                        <div className="info-sect repairs-sect">
                            <p className="sub-heading"> Repairs. </p>
                            <p className="info-text">
                                We use monetary donations
                                and proceeds from the
                                shop (coming soon) to buy helmets and
                                pay for any repairs to get the bike
                                in tip top shape.</p>
                            <a className="btn btn-filled" href="https://gofund.me/efa2a0dc" target="_blank">Donate Funds.</a>
                        </div>
                    </div>
                    <div className="info-sect-cont col-4">
                        <img className="top-div deliver-img" src={bikeCircle} alt="deliver" />
                        <div className="info-sect deliver-sect">
                            <p className="sub-heading"> Deliver. </p>
                            <p className="info-text">
                                We get bike requests from
                                individuals or from
                                organizations and
                                deliver them free of charge
                                based on availability and
                                location.</p>
                            <Link className="btn btn-filled" to="/donate">Make a Request.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Section4 = () => {
    return (
        <div className="landing-sect landing-4">
            <div className="content row">
                <div className="text-container col-6">
                    <div className="background-img-container">
                        <img className="circle-img" src={bottomCircle} alt="background-circle" />
                    </div>
                    <div className="info">
                        <p className="italic-heading">Acknowledgements.</p>
                        <p className="sub-heading">Making a Difference. </p>
                        <p className="info-text">
                            Since starting at the beginning of 2022, we've
                            received over 50 bike donations and given away
                            more than 20 repaired bikes to individuals and
                            organizations all across Nova Scotia. We've been
                            able to make find new homes for these bikes
                            through Facebook messenger, email, phone,
                            organization representatives and personal
                            connections, keeping all lines of communication
                            open for any way someone may want to reach
                            out and make a request.
                        </p>
                    </div>
                </div>
                <div className="quotes col-6">
                    <div className="quotes-img-container">
                        <img className="quotes-img" src={quotes} alt="quotes" />
                    </div>
                    <div id="acknowledgementsCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#acknowledgementsCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#acknowledgementsCarousel" data-slide-to="1"></li>
                            <li data-target="#acknowledgementsCarousel" data-slide-to="2"></li>
                            <li data-target="#acknowledgementsCarousel" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel carousel-inner">
                            <div class="carousel carousel-item active">
                                <img className="quote-avatar" src={dumbGlassesAvatar} alt="first-acknowledgement" />
                                <p className="quote-name"> CurlyGal </p>
                                <p className="quote-action"> -Recieved 2 Bikes </p>
                                <p className="quote-content">
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua." </p>
                            </div>
                            <div class="carousel carousel-item">
                                <img className="quote-avatar" src={strapsAvatar} alt="second-acknowledgement" />
                                <p className="quote-name"> SaftyMan </p>
                                <p className="quote-action"> -Donated a Bike </p>
                                <p className="quote-content">
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua." </p>
                            </div>
                            <div class="carousel carousel-item">
                                <img className="quote-avatar" src={circleGlassesAvatar} alt="third-acknowledgement" />
                                <p className="quote-name"> ShinyGlasses </p>
                                <p className="quote-action"> -CMHA Representative </p>
                                <p className="quote-content">
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua." </p>
                            </div>
                            <div class="carousel carousel-item">
                                <img className="quote-avatar" src={moustacheAvatar} alt="fourth-acknowledgement" />
                                <p className="quote-name"> Moustachio </p>
                                <p className="quote-action"> -CMHA Representative </p>
                                <p className="quote-content">
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua." </p>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#acknowledgementsCarousel" role="button" data-slide="prev">
                            <span className="carousel-btn"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#acknowledgementsCarousel" role="button" data-slide="next">
                            <span class="carousel-btn"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Section5 = () => {
    return (
        <div className="landing-sect landing-back landing-5">
            <div className="bike-animation">
                <ScrollContainer snap="none">
                    <ScrollPage page={4}>
                        <Animator animation={MoveIn(400, 0)}>
                            <img className="moving-bike flipped" src={bikelogo} alt="background_image" />
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            </div>
            <img className="landing-background landing5-background" src={landing5back} alt="background_image" />
            <div className="info">
                <div className="text-container">
                    <p className="italic-heading underlined">Partners and Supporters.</p>
                    <p className="sub-heading">Open Hearts. Open Doors.</p>
                </div>
                <div className="partner-logos">
 
                </div>
            </div>
        </div>
    )
}

const Section6 = () => {
    return (
        <div className="landing-sect landing-6">
            <div className="content row">
                <div className="img-container col-6">
                    <img className="kid-bike-img" src={kidBike} alt="final-img" />
                </div>
                <div className="text-container col-6">
                    <h3 className="get-started"> Get Started. </h3>
                    <p> Whether you have a bike that needs a new
                        home and a little TLC or you need a bike for
                        you, someone you know or an organization
                        you represent, get started now.</p>
                    <div className="btns">
                        <Link className="btn btn-filled" to="/donation">Make a Donation.</Link>
                        <Link className="btn btn-outline" to="/request">Make a Request.</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
