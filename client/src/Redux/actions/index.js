import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';

export function getCountries() {

    return async function(dispatch) {

        const res = await axios.get("http://localhost:3001/countries")
            return dispatch({
                type: 'GET_COUNTRIES',
                payload: res.data
            });
    }
}
