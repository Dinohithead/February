import './_field.scss';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setFieldSizeWidth, setFieldSizeHeight } from '../../redux/actions/Field';

const Field = ({ fullScreen, type, ...props }) => {
    const dispatch = useDispatch();

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const { width, height } = useSelector(state => state.field);

    useEffect(() => {
        if (fullScreen) {
            dispatch(setFieldSizeWidth(windowWidth));
            dispatch(setFieldSizeHeight(windowHeight));
        }
    }, [dispatch]);
    
    return (
        <canvas 
            id='fieldCanvas'
            style={{
                width,
                height
            }}
        >
            {/* Canvas don't work in your browser */}
            {props.children}
        </canvas>
    )
}

Field.propTypes = {
    fullScreen: PropTypes.bool
}
Field.defaultProps = {
    fullScreen: true
}

export default Field;