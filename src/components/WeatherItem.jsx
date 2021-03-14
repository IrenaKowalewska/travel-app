const WeatherItem = ({weather}) => {
    const setLanguage = (id) => {
        if (localStorage.getItem('lang') === 'pl') {
        const weather = {
                "200": "Burza z piorunami i lekki deszcz",
                "201": "Burza z deszczem",
                "202": "Burza z ulewnym deszczem",
                "231": "Burza z mżawką",
                "232": "Burza z piorunami i ulewnym deszczem",
                "233": "Burza z gradem",
                "300": "Lekka mżawka",
                "301": "Mżawka",
                "302": "Ulewny deszcz",
                "500": "Lekki deszcz",
                "501": "Umiarkowany deszcz",
                "502": "Ulewny deszcz",
                "511": "Deszcz i śnieg",
                "520": "Lekki deszcz",
                "521": "Ulewa",
                "522": "Obfite opady deszczu",
                "600": "Lekki śnieg",
                "601": "Śnieg",
                "602": "Obfite opady śniegu",
                "610": "Zmieszany śnieg / deszcz",
                "611": "Mokry śnieg",
                "612": "Silny deszcz ze śniegiem",
                "621": "Opady śniegu",
                "622": "Obfite opady śniegu",
                "623": "Opady śniegu",
                "700": "Zamglenie",
                "711": "Dym",
                "721": "Mgła",
                "731": "Piasek / pył",
                "741": "Mgła",
                "751": "Mroźna mgła",
                "800": "Bezchmurne",
                "801": "Lekkie zachmurzenie",
                "802": "Częściowe zachmurzenie",
                "803": "Pochmurno, momentami przelotne",
                "804": "Pochmurno",
                "900": "Nieznane opady"
              };
            return (weather[id]);
        } 
        if (localStorage.getItem('lang') === 'ru') {
            const weather = {
                "200": "Гроза с небольшим дождем",
                "201": "Гроза с дождем",
                "202": "Гроза с проливным дождем",
                "231": "Гроза с моросящим дождем",
                "232": "Гроза с сильным моросящим дождем",
                "233": "Гроза с градом",
                "300": "Легкая морось",
                "301": "Морось",
                "302": "Сильный дождь",
                "500": "Легкий дождь",
                "501": "Умеренный дождь",
                "502": "Сильный дождь",
                "511": "Дождь со снегом",
                "520": "Слабый дождь",
                "521": "Ливень",
                "522": "Сильный ливень",
                "600": "Легкий снег",
                "601": "Снег",
                "602": "Сильный снегопад",
                "610": "Смешать снег / дождь",
                "611": "Мокрый снег",
                "612": "Тяжелый мокрый снег",
                "621": "Снегопад",
                "622": "Сильный снегопад",
                "623": "Снегопад",
                "700": "Мгла",
                "711": "Дым",
                "721": "Туман",
                "731": "Песок / пыль",
                "741": "Туман",
                "751": "Морозный туман",
                "800": "Безоблачно",
                "801": "Слабая облачность",
                "802": "Переменная облачность",
                "803": "Облачно с прояснениями",
                "804": "Пасмурно",
                "900": "Неизвестные осадки"
              };
            return (weather[id]);
        }
        if (localStorage.getItem('lang') === 'en') {
            const weather = {
                "200": "Thunderstorm with light rain",
                "201": "Thunderstorm with rain",
                "202": "Thunderstorm with heavy rain",
                "231": "Thunderstorm with drizzle",
                "232": "Thunderstorm with heavy drizzle",
                "233": "Thunderstorm with Hail",
                "300": "Light Drizzle",
                "301": "Drizzle",
                "302": "Heavy Drizzle",
                "500": "Light Rain",
                "501": "Moderate Rain",
                "502": "Heavy Rain",
                "511": "Freezing rain",
                "520": "Light shower rain",
                "521": "Shower rain",
                "522": "Heavy shower rain",
                "600": "Light snow",
                "601": "Snow",
                "602": "Heavy Snow",
                "610": "Mix snow/rain",
                "611": "Sleet",
                "612": "Heavy sleet",
                "621": "Snow shower",
                "622": "Heavy snow shower",
                "623": "Flurries",
                "700": "Mist",
                "711": "Smoke",
                "721": "Haze",
                "731": "Sand/dust",
                "741": "Fog",
                "751": "Freezing Fog",
                "800": "Clear sky",
                "801": "Few clouds",
                "802": "Scattered clouds",
                "803": "Broken clouds",
                "804": "Overcast clouds",
                "900": "Unknown Precipitation"
              };
            return (weather[id]);
        }
    }
    return <div className="weather-block">
        <div className="weather-temp">
            <span className="temp-icon">{<img src={`https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`}/>}</span> 
            <span className="temp">{`${Math.round(weather.main.temp - 273,15)}`}&deg;C</span></div>
        <div className="temp-descr">{setLanguage(weather.weather[0].id)}</div>
    </div>
}

export { WeatherItem };