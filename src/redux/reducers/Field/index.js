import * as actionTypes from '../../types/Field';

const initState = {
    width: 0,
    height: 0
}

const fieldReducer = (state = initState, action) => {
    switch (
        action.type
    ) {
        case actionTypes.CHANGE_FIELD_SIZE_WIDTH:
            return {
                ...state,
                width: action.payload
            }
        case actionTypes.CHANGE_FIELD_SIZE_HEIGHT:
            return {
                ...state,
                height: action.payload
            }
        default:
            return state;
    }
}

export default fieldReducer;