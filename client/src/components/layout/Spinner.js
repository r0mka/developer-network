import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Spinner = () => {
    return (
        <Fragment>
             <img 
             src={spinner}
             style={{width: '200px', margin: 'auto', display: 'block'}}
             alt="Loading..."
             />
        </Fragment>
    )
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
// #endregion

export default Spinner;