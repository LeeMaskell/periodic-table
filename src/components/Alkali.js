import React from 'react'
import { alkali } from '../data/data.js'
import ElementCell from './ElementCell.js';

const Alkali = ({ onElementSelected }) => {
    const alkaliData = alkali;
    return (
        <div className="alkali">
            {alkaliData.map((item) => {
                return <ElementCell data={item} event={onElementSelected} className={'alkali'} />
            })}
        </div >
    )
}

export default Alkali
