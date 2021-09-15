import React from 'react'

const ElementDetails = ({ featured }) => {
    return (
        <div className="element-details">
                <div>
                    {featured ? <div className="details-container">
                        <h1 className="details">{featured.name}</h1>
                        <p className="details">Group: {featured.tag}</p>
                        <p className="details">Atomic Number: {featured.atomicNumber}</p>
                        <p className="details">Atomic Mass: {featured.atomicMass}</p>
                    </div> : ""}
                </div>
        </div>
    )
}

export default ElementDetails