import React from 'react'
import { otherElements } from '../data/data.js'
import ElementCell from './ElementCell.js';

const OtherElements = ({onElementSelected}) => {
    const otherElementsData = otherElements;
    return (
        <div className="other-elements">
            {otherElementsData.map((item) => {
                const itemClass = item.tag === "Other Non-metals" ? 'other-non-metals' : 'other-metals';
                return <ElementCell data={item} event={onElementSelected} className={itemClass} />
            })}
        </div>
    )
}

export default OtherElements
