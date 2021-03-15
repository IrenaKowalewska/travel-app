import React, { useEffect, useState } from 'react';
import { WeatherItem } from './WeatherItem';

function Weather({id}) {
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=f3416cd6137a98304fe1bc4a4fec55ff`)
                .then(res => res.json())
                .then(res => {
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