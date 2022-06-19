import TopNav from './TopNav'

import toolbox from '../images/ToolBox.png'
import donateBike from '../images/FixedBike.png'

function DonateOne() {
    return (
        <div className="bike-form-container donate-form-one">
            <TopNav navtype="solid-nav"/>
            <div className="bike-form donate-one-info">
                <p className="form-title donation-title"> Make a Donation. </p>
                <p className="form-content donation-content">
                    We rely on donations from generous people around the community to be able to give away
                    bikes completely free of charge. We take bikes as donations - in any condition - and use any money
                    donated to purchase any parts for repairs and helmets.
                </p>
                <div className="card-deck">
                    <div className="card form-card donate-card" onClick={event => window.open('https://gofund.me/efa2a0dc', '_blank')}>
                        <img class="card-img-top donate-img" src={toolbox} alt="tool-box"/>
                        <div class="card-body">
                            <h5 class="card-title">Donate Money</h5>
                            <h6 class="card-subtitle mb-2 text-muted">for parts and helmets.</h6>
                            <p class="card-text">
                                All donated funds go directly to fixing donated bikes
                                and buying helmets when the bikes are claimed.
                            </p>
                        </div>
                    </div>
                    <div className="card form-card donate-card" onClick={event => window.location.href = '/donatebike'}>
                        <img class="card-img-top donate-img" src={donateBike} alt="fixed-bike" />
                        <div class="card-body">
                            <h5 class="card-title">Donate Bikes</h5>
                            <h6 class="card-subtitle mb-2 text-muted">in any condition.</h6>
                            <p class="card-text">
                                The bikes we receive all get fixed up and given to someone
                                who needs them. We can come to you, or you to us!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background-rect"></div>
        </div>
    )
}

export default DonateOne