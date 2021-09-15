import React from 'react'

const ElementCell = ({data, event, className, id}) => {
    return (
        <div className={`element element-${className}`} onClick={() => event(data) }>
            <div className="atomic-number">{data.atomicNumber}
            </div>
            <div className="element-content">
                <div className="symbol">{data.symbol}</div>
                <div className="name">{data.name}</div>
                <div className="mass">{data.atomicMass}</div>
            </div>
        </div>
    )
}

export default ElementCell
