import React, { useEffect } from 'react';

const Weather = ({country}) => {
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=558ef0dc48039d0b4cd8d42ac5251fe5`)
            .then(res => res.json())
            .then(data => console.log(data))
    })
    console.log(country)
    return <p>weather</p>
}

export { Weather };