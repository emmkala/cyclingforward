import { useState } from 'react'

function ResourceCard(props) {
    const [cardImage, setCardImage] = useState(props.cardImage)
    const [cardTitle, setCardTitle] = useState(props.cardTitle)
    const [cardLink, setCardLink] = useState(props.cardLink)
    const [cardDesc, setCardDesc] = useState(props.cardDesc)

    return (
        <div className="resource-card card">
            <img src={cardImage} class="card-img-top" alt={cardTitle} />
            <div class="card-body">
                <h5 class="card-title">{cardTitle}</h5>
                <p class="card-text">{cardDesc}</p>
                <a href={cardLink} target="_blank" class="btn card-btn"> Learn More </a>
            </div>
        </div>
    )
}

export default ResourceCard