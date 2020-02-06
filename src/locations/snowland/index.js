import React from 'react';
import Field from '../../components/Field';
import FirTree from '../../components/Tree/Fir-tree';
import Human from '../../components/Human';

const SnowLand = props => {
    return (
        <>
        <Field fullScreen/>
        <FirTree x={200} y={400} />
        <FirTree x={600} y={700} />
        <FirTree x={600} y={250} />
        <FirTree x={1000} y={100} />
        <FirTree x={1200} y={700} />
        <FirTree x={1500} y={300} />
        <Human x={1000} y={500}/>
        </>
    )
}

export default SnowLand;