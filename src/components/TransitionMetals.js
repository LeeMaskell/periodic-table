import React from 'react'
import { transition } from '../data/data.js'
import ElementCell from './ElementCell.js';

const TransitionMetals = ({onElementSelected}) => {
    const transitionData = transition;
    return (
        <div className="transition-metals">
            {transitionData.map((item) => {
                return <ElementCell data={item} event={onElementSelected} className={'transition'}/>
            })}
        </div>
    )
}

export default TransitionMetals
