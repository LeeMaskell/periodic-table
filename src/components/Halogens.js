import React from 'react'
import { halogens } from '../data/data.js'
import ElementCell from './ElementCell.js';

const Halogens = ({onElementSelected}) => {
    const halogensData = halogens;
    return (
        <div className="halogens">
            {halogensData.map((item) => {
                return <ElementCell data={item} event={onElementSelected} className={'halogens'}/>
            })}
        </div>
    )
}

export default Halogens
