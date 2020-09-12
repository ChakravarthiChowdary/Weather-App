import {
  GET_WEATHER_DATA_FAIL,
  GET_WEATHER_DATA_START,
  GET_WEATHER_DATA_SUCCESS,
} from "../actions/actions";

const initialState = {
  loading: false,
  weatherData: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case GET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        weatherData: action.payload,
      };
    case GET_WEATHER_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        weatherData: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
