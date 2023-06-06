import './WeatherToday.css'

function WeatherToday() {
    let additionalInformation = {
        humidity: "10%",
        wind: "20",
        rain: "30"

    }
    return (
        <div>
            <div className="WeatherToday"><span>19°</span></div><div className="degree"><a className="celsius" href='/'>C</a><span className="separationBar"> | </span><a className="fahrenheit" href='/'>F</a></div>
            <img className="icon" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt='Partly Cloudy'/>
            <p className="humidity">Humidity: {additionalInformation.humidity}</p>
            <p className="wind">Wind: {additionalInformation.wind} km/h</p>
            <p className="rainProb">Rain probability: {additionalInformation.rain}%</p>

        </div>
    );
}

export default WeatherToday;