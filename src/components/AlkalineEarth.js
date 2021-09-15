import React from 'react'
import { alkalineEarth } from '../data/data.js'
import ElementCell from './ElementCell.js';

const AlkalineEarth = ({onElementSelected}) => {
    const alkalineEarthData = alkalineEarth;
    return (
        <div className="alkaline-earth">
            {alkalineEarthData.map((item) => {
                return <ElementCell data={item} event={onElementSelected} className={'alkaline-earth'}/>
            })}
        </div>
    )
}

export default AlkalineEarth


