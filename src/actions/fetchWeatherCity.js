import { getWeatherByCity } from "../services/weather";

export function fetchWeatherCity(city) {
    return async function(dispatch) {
        const data = await getWeatherByCity(city);
        dispatch({
            type: 'FETCH_WEATHER_CITY',
            payload: data,
        });
    }
}