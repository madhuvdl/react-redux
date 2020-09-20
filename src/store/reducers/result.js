import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {
    storeResults: []
}

const deleteResult = (state, action) => {
    const storeResults = state.storeResults.filter(result => result.id !== action.id)
    return updateObject(state, { storeResults: storeResults });
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {storeResults: state.storeResults.concat({id: new Date(), value: action.result})})
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
}

export default reducer;