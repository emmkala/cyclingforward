import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

import TopNav from './TopNav'

import DonationImg from '../images/littlekidbike.png'
import RequestImg from '../images/biketowork.png'

function Confirmation(props) {
    let { confirmationType } = useParams();

    var confirmationImg = DonationImg;
    var confirmationText =
        "We're able to keep doing what we're doing because of generous " + 
        "donations, so thank you! We will be in touch via your listed form " +
        "of contact to iron out the details of when and where we can do the " +
        "hand off. In the meantime, if you have any questions please feel free " +
        "to reach out at cyclingforward@gmail.com. We try to get to everyone as " +
        "quickly as possible but it may take a few days if we are hearing from a " +
        "lot of people, so sit tight and we'll get to you!";

    if (confirmationType == "request") {
        confirmationImg = RequestImg;
        confirmationText =
            "We've received your request! We will be in contact with you about when" +
            " and where we can do the hand off. We process every bike request as it " +
            "comes in, so at the moment there we may not have any of the type of bike you" +
            " requested. If not, your name is now at the top of our list when one does come" +
            " in. In the meantime, if you have any questions or want any updates please feel " +
            "free to email us at cyclingforward@gmail.com and we'll get back to you as soon as we can."
    }

    return (
        <div className="bike-form-container">
            <TopNav navtype="solid-nav" />
            <div className="bike-form">
                <div className="card confirmation-card form-card">
                    <div className="row no-gutters">
                        <div className="col-md-5 confirmation-img-cont">
                            <img className="confirmation-img" src={confirmationImg} alt="img" />
                        </div>
                        <div className="col-md-7 confirmation-text-cont">
                            <div className="card-body">
                                <h1 className="card-title">Thank You!</h1>
                                <p className="card-text"> {confirmationText}</p>
                                <Link className="btn submit-btn" to="/">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background-rect"></div>
        </div>
    )
}

export default Confirmation