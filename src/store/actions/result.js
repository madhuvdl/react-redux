import * as actionTypes from './actionTypes';

export const storeResult = (value) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: value
    }
};

export const deleteResult = (value) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: value
    }
};
