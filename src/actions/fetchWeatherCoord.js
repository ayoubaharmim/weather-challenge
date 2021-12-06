import { getWeatherByCoordinates } from "../services/weather";

export function fetchWeathercoord(lat, long) {
    return async function(dispatch) {
        const data = await getWeatherByCoordinates(lat, long);
        dispatch({
            type: 'FETCH_WEATHER_COORD',
            payload: data
        });
    }
}