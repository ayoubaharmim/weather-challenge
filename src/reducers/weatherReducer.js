const weatherInfo = (state = {
    info: {}
}, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_CITY':
            return {...state, info: action.payload};
        case 'FETCH_WEATHER_COORD':
            return {...state, info: action.payload};
        default:
            return state;
    }
}

export default weatherInfo;