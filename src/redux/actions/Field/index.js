import * as actionTypes from '../../types/Field'

export const setFieldSizeWidth = value => {
    return {
        type: actionTypes.CHANGE_FIELD_SIZE_WIDTH,
        payload: value
    }
}

export const setFieldSizeHeight = value => {
    return {
        type: actionTypes.CHANGE_FIELD_SIZE_HEIGHT,
        payload: value
    }
}
