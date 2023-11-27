import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css';
import axios from 'axios';
import weatherLogo from "../../assets/logo/weatherLogo.svg"
import pressureLogo from "../../assets/logo/pressureLogo.svg"
import windLogo from "../../assets/logo/windLogo.svg"
import humidityLogo from "../../assets/logo/humidityLogo.svg"

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const apiKey = '88c686317efa4c7bb53174951232611';
                const city = 'Visakhapatnam';
                const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
                const response = await axios.get(apiUrl);
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchWeatherData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!weatherData) {
        return <p className={styles.error}>Error fetching weather data</p>;
    }

    return (
        <div className={styles.weatherContainer}>
            <div className={styles.weatherInfo}>
                {/* <p>City: {weatherData.location.name}</p> */}
                <img src={weatherLogo} alt="Weatherlogo" />
                <p className={styles.weatherCondition}>{weatherData.current.condition.text}</p>
            </div>
            <hr />
            <div className={styles.temperatureInfo}>
                <p className={styles.tempMeasurement}>{weatherData.current.temp_c} °C</p>

                <div className={styles.pressureInfo}>
                    <div className={styles.pressureLogo}>
                        <img src={pressureLogo} alt="Pressurelogo" />
                    </div>
                    <div>
                        <p> {weatherData.current.pressure_mb} mbar</p>
                        <p>Pressure</p>
                    </div>
                </div>

            </div>
            <hr/>
            <div className={styles.windHumidityInfo}>
                <div className={styles.humidityInfo}>
                    <div>        
                        <img src={windLogo} alt="Windlogo" />
                    </div>
                    <div>
                        <p> {weatherData.current.wind_kph} km/h</p>
                        <p>Wind</p>
                    </div>
                </div>
               
                <div className={styles.windInfo}>
                    <div>
                        <img src={humidityLogo} alt="Humiditylogo" />
                    </div>
                    
                    <div>
                        <p> {weatherData.current.humidity}%</p>
                        <p>Humidity</p>
                    </div>
               </div>
                
            </div>
        </div>
    );
};

export default Weather;
