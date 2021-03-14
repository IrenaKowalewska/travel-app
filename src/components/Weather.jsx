import React, { useEffect, useState } from 'react';
import { WeatherItem } from './WeatherItem';

const Weather = ({country}) => {
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=f3416cd6137a98304fe1bc4a4fec55ff`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    setWeather(res);
                    setLoading(false);
                })
    }, []);
 
    return <div>
            {
                loading ? <h3 className="temp">Loading...</h3> : <WeatherItem weather={weather}/>
            }
    </div>
}

export { Weather };