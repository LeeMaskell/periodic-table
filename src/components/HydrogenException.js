import React from 'react'
import { hydrogenException } from '../data/data.js'
import ElementCell from './ElementCell.js';

const HydrogenException = ({onElementSelected}) => {
    const hydrogenExceptionData = hydrogenException;
    return (
        <div className="hydrogen-noble">
            {hydrogenExceptionData.map((item) => {
                return <ElementCell data={item} event={onElementSelected} className={'noble-gases'}/>
            })}
        </div >
    )
}

export default HydrogenException
