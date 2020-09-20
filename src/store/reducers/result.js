import * as actionTypes from '../actions';

const initialState = {
    storeResults: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                storeResults: state.storeResults.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            return {
                storeResults: state.storeResults.filter(result => result.id !== action.id)
            }
    }

    return state;
}

export default reducer;