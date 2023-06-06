import './City.css'

function City() {
    let weatherData = {
        city: "Madrid",
        date: "Sunday, January 01, 2023",
        updateTime: "Last time updated: 00:00",
        weatherDescription: "Clear Sky",

    }
    return (
        <div>
            <h1 className="City">{weatherData.city}</h1>
            <p className="currentDate">{weatherData.date}</p>
            <p className='currentTime'>{weatherData.updateTime}</p>
            <p className="currentWeather">{weatherData.weatherDescription}</p>
        </div>
    );
}

export default City;