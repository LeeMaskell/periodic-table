import React from 'react'
import { rareEarth } from '../data/data.js'
import ElementCell from './ElementCell.js';

const RareEarth = ({onElementSelected}) => {
    const rareEarthData = rareEarth;
    return (
        <div className="rare-earth">
            {rareEarthData.map((item) => {
                return <ElementCell data={item} event={onElementSelected} className={'rare-earth'}/>
            })}
        </div>
    )
}

export default RareEarth
