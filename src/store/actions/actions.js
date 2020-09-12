import axios from "axios";

export const GET_WEATHER_DATA_START = "GET_WEATHER_DATA_START";
export const GET_WEATHER_DATA_SUCCESS = "GET_WEATHER_DATA_SUCCESS";
export const GET_WEATHER_DATA_FAIL = "GET_WEATHER_DATA_FAIL";

const API_KEY = "ed9e6234829afe866e77a51e21e18265";

export const getWeatherData = (LatOrCity, LonOrCountry, coordsUsed) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_WEATHER_DATA_START });
      let response;
      if (!coordsUsed)
        response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${LatOrCity},${LonOrCountry}&appid=${API_KEY}`
        );
      else
        response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LatOrCity}&lon=${LonOrCountry}&appid=${API_KEY}`
        );

      dispatch({ type: GET_WEATHER_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_WEATHER_DATA_FAIL, payload: error });
    }
  };
};
