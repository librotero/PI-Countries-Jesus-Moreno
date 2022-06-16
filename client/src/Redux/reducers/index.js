import {
    GET_COUNTRIES
} from '../actions/index';

const initialState = {
    countries: [],
    allCountries:[]
}
function countriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        default:
            return state;
    }
}
export default countriesReducer;