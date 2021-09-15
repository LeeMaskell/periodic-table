import React from 'react'
import { nobleGases } from '../data/data.js'
import ElementCell from './ElementCell.js';

const NobleGases = ({onElementSelected}) => {
    const nobleGasesData = nobleGases;
    return (
        <div className="noble-gases">
            {nobleGasesData.map((item) => {
                return <ElementCell data={item} event={onElementSelected} className={'noble-gases'}/>
            })}
        </div>
    )
}

export default NobleGases
