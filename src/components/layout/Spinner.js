import React, { Fragment } from 'react'
import spinner from './spinner.gif';

export const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt='Loadding...' style={spinnerClass} />
        </Fragment>
    )
}




// Spinner Style
const spinnerClass = {
    width: '200px',
    margin: 'auto',
    display: 'block'
}

export default Spinner;