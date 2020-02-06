import './_human.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Human = ({ x, y }) => {
    return (
        <div
            id='human'
            style={{
                left: x,
                top: y
            }}
        />
    )
}

Human.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

Human.defaulProps = {
    x: 0,
    y: 0
}

export default Human