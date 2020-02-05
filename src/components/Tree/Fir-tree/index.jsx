import './_firTree.scss';
import React from 'react';
import PropTypes from 'prop-types';

const FirTree = ({ x, y }) => {
    return (
        <div 
            className='firTree'
            style={{
                left: x,
                top:  y,
            }}
        >

        </div>
    )
}

FirTree.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

FirTree.defaultProps = {
    x: 0,
    y: 0
}

export default FirTree;