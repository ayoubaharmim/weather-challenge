import React, { useEffect, useState } from 'react';
import { fetchWeatherCity } from './actions/fetchWeatherCity';
import {useSelector, useDispatch} from 'react-redux';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import assetMapping from './assets/assetMapping.json';
import Preview from './components/Preview/Preview';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import Card from './elements/Card/Card';
import './App.module.css';
import ErrorNotice from './components/ErrorNotice/ErrorNotice';

function App() {
  const [city, setCity] = useState('');
  const [weatherDetails, setDetails] = useState();
  const [error, setError] = useState(false);

  const weatherSelector = useSelector(state => state.weatherInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    if(weatherSelector.info && weatherSelector.info.weatherDetails) {
      setError(false);
      setDetails(weatherSelector.info.weatherDetails);
    }
  }, [weatherSelector]);

  const getWeatherInfoActionByLocation = (city) => dispatch(fetchWeatherCity(city));

  const getWeatherInfo = async (e) => {
    e.preventDefault();
    if(city === "") {
      setError(true);
    } else {
      getWeatherInfoActionByLocation(city);
    }
  }

  const renderCard = () => {
    if(error) {
      return <ErrorNotice />;
    } else {
      return weatherDetails === undefined ? <Preview/> : <WeatherDetails data={weatherDetails}/>;
    }
  }

  return (
    <div className="AppWrapper">
      
      <Header color={assetMapping.colors["default"]}/>
      <main className="AppMain">
      <SearchBar
            value={city}
            onClickHandler={getWeatherInfo}
            onChangeHandler={e => setCity(e.target.value)} />
      <Card>
        {renderCard()}
      </Card>
      </main>
    </div>
  );
}

export default App;
