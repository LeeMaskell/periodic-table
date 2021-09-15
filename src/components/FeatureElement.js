import React from 'react'

const Feature = ({ featured }) => {
    return (
        <div className="feature">
                <div>
                    {featured ? <div className="feature-container">
                        <h4>{featured.atomicNumber}</h4>
                        <h2>{featured.symbol}</h2>
                        <h3>{featured.name}</h3><h4 className="atomic-mass">{featured.atomicMass}</h4>
                    </div> : "Select an element"}
                </div>
        </div>
    )
}

export default Feature
