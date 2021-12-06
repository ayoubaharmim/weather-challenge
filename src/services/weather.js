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
                },
                loading: false
            }
        } else throw data.cod;
    } catch (error) {
        console.error(error);
    }
    
}

export async function getWeatherByCoordinates(latitude, longitude) {
    try {
        const data = await (await axios.get(`?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)).data;
        if(data.cod === 200) {
            return {
                weatherDetails: {
                    temprature: data.main.temp,
                    description: data.weather[0].main
                },
                loading: false
            }
        } else throw data.cod;
    } catch (error) {
        throw(error);
    }
}


export async function getCurrentLocation() {
    if (navigator.geolocation) {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
        };
      } else {
        throw new Error("Geolocation is not supported by this browser.");
      }
}

