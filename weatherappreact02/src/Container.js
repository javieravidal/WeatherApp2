import './Container.css'
import City from './City';
import Search from './Search';
import WeatherToday from './WeatherToday';
import Forecast from './Forecast';

function Container() {
 
    return (
        <div className="Background">
            <div className="Container">
                <Search />
                <City />
                <WeatherToday />
                <Forecast />
            </div>
        </div>
    );
}

export default Container;