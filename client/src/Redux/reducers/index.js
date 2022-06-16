import { GET_COUNTRIES } from "../actions/index";

const initialState = {
  countries: [],
  allCountries: [],
};
function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case "GET_NAME_COUNTRY":
      return {
        ...state,
        countries: action.payload,
      };
    case "GET_CONTINENT":
      const allCountries2 = state.allCountries;
      const contienentFilter = action.payload === "all" ? allCountries2: allCountries2.filter((el) => el.continents === action.payload);
      return {
        ...state,
        countries: contienentFilter
      };

    default:
      return state;
  }
}
export default countriesReducer;
