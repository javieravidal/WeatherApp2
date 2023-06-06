import './Forecast.css'

function Forecast() {
    return (
        <div className="Forecast">
            <div className='day1'>
                <h4>Mon</h4>
                <img className="icon1" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt='Partly Cloudy'/>
                <div className="degreesForecast"><span className="minForecast">12°</span> | <span className="maxForecast">22°</span></div>
            </div>
            <div className='day2'>
                <h4>Tue</h4>
                <img className="icon2" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt='Partly Cloudy'/>
                <div className="degreesForecast"><span className="minForecast">12°</span> | <span className="maxForecast">22°</span></div>
            </div>
            <div className='day3'>
                <h4>Wed</h4>
                <img className="icon3" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt='Partly Cloudy'/>
                <div className="degreesForecast"><span className="minForecast">12°</span> | <span className="maxForecast">22°</span></div>
            </div>
            <div className='day4'>
                <h4>Thu</h4>
                <img className="icon4" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt='Partly Cloudy'/>
                <div className="degreesForecast"><span className="minForecast">12°</span> | <span className="maxForecast">22°</span></div>
            </div>
            <div className='day5'>
                <h4>Fri</h4>
                <img className="icon5" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt='Partly Cloudy'/>
                <div className="degreesForecast"><span className="minForecast">12°</span> | <span className="maxForecast">22°</span></div>
            </div>
        </div>
    );
}

export default Forecast;