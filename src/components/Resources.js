import TopNav from './TopNav'
import ResourceCard from './ResourceCard'
import Footer from './Footer'

import resourcesBackground from '../images/resourcesBlur.png'
import card1 from '../images/resource_cards/card1.jpg'
import card2 from '../images/resource_cards/card2.jpg'
import card3 from '../images/resource_cards/card3.png'
import card4 from '../images/resource_cards/card4.jpeg'
import card5 from '../images/resource_cards/card5.png'
import card6 from '../images/resource_cards/card6.png'
import card7 from '../images/resource_cards/card7.jpg'
import card8 from '../images/resource_cards/card8.png'
import card9 from '../images/resource_cards/card9.png'

function Resources() {
    return (
        <div className="resources">
            <TopNav navtype='changing-nav'/>
            <div className="resources-landing resources-sect">
                <img className="resources-background" src={resourcesBackground} alt="heading_image" />
                <div className="resources-info">
                    <h1 className="title"> Resources. </h1>
                    <p className="subtitle">
                        Learn more about cycling, health benefits and mental health assistance.
                    </p>
                </div>
            </div>
            <div className="resources-sect">
                <div className="sect-header">
                    <p className="title" >Learn More.</p>
                    <p className="subtitle">Cycling benefits, mechanics, and more! </p>
                </div>
                <div className="card-deck">
                    <ResourceCard
                        cardImage={card1}
                        cardTitle='Cycling - Health Benefits'
                        cardLink='https://www.betterhealth.vic.gov.au/'
                        cardDesc='Learn about the benefits of regular cycling, cycling for health and fitness, and how cycling can help specific illnesses and diseases. '
                    />
                    <ResourceCard
                        cardImage={card2}
                        cardTitle='Cycling - Excersize for Positive Mental Health'
                        cardLink='https://mensline.org.au/'
                        cardDesc='Learn about the positive mental health effects cycling can have.'
                    />
                    <ResourceCard
                        cardImage={card3}
                        cardTitle='ParkTool'
                        cardLink='https://www.youtube.com/c/parktool'
                        cardDesc='Learn about bicycle repairs so you can keep your new bike in tip top shape.'
                    />
                </div>
            </div>
            <div className="resources-sect">
                <div className="sect-header">
                    <p className="title" >Community Resources.</p>
                    <p className="subtitle">Cycling community and mental health resources.</p>
                </div>
                <div className="card-deck">
                    <ResourceCard
                        cardImage={card4}
                        cardTitle='Bicycle Nova Scotia'
                        cardLink='https://bicycle.ns.ca/'
                        cardDesc='Learn about cycling clubs, events and competitions to join the Nova Scotian cycling community.'
                    />
                    <ResourceCard
                        cardImage={card5}
                        cardTitle='Nova Scotia 211'
                        cardLink='https://ns.211.ca/'
                        cardDesc='"Connecting Nova Scotians experiencing unmet social or human needs with organizations able to meet those needs."'
                    />
                    <ResourceCard
                        cardImage={card6}
                        cardTitle='CMHA Colchester-East Hants'
                        cardLink='https://ceh.cmha.ca/'
                        cardDesc='Community events and mental health and addictions resources within the Colchester and East Hants region.'
                    />
                </div>
                <div className="card-deck">
                    <ResourceCard
                        cardImage={card7}
                        cardTitle='CMHA Halifax-Dartmouth'
                        cardLink='https://www.cmhahalifaxdartmouth.ca/'
                        cardDesc='Community events and mental health and addictions resources within the Halifax and Dartmouth region.'
                    />
                    <ResourceCard
                        cardImage={card8}
                        cardTitle='Nova Scotia Health'
                        cardLink='https://mha.nshealth.ca/en'
                        cardDesc="Mental health and addictions programs across all of Nova Scotia; find one that's right for you."
                    />
                    <ResourceCard
                        cardImage={card9}
                        cardTitle='Cycle Nova Scotia'
                        cardLink='http://www.cyclenovascotia.ca/'
                        cardDesc='Find cycling routes, including GPS downloads all over Nova Scotia.'
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Resources