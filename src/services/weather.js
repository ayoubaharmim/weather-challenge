import axios from "axios";
import settings from "../config/settings"

axios.defaults.baseURL = settings.baseApiUrl;

export async function getWeatherByCity(city) {
    try {
        const data = await (await axios.get(`?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)).data;
        if(data.cod === 200) {
            console.log(data);
            return {
                weatherDetails: {
                    temprature: data.main.temp,
                    description: data.weather[0].main
                }
            }
        } else throw data.cod;
    } catch (error) {
        console.error(error);
    }
    
}
