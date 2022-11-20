import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import ecweather from 'ec-weather';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        console.log("fetching weather.. from func", ecweather);
        let data = await ecweather({
            lang: 'en',
            city: 'ab-52',
          })
          
        // let data = await fetch('https://weather.gc.ca/rss/city/ab-52_e.xml', {
        //     mode: 'no-cors', // Mess with diff versions
        //     credentials: 'same-origin', // include, *same-origin, omit
        // })

        console.log("done fetching XML", data);

          console.log("Setting weather data")
          setWeatherData(data);

          console.log("weather has been fetched!");
          console.log(JSON.stringify(data, undefined, 2));
    };

    useEffect(() => {
        console.log("Layout useEffect started...");

        (async () => {
        if (!weatherData) {
             await fetchWeather();
        }
    })()}, [weatherData])

    return(
        <Container>
                <Row>
                    {/* <span>{weatherData ?  weatherData.temperature || "Loading weather data..."}</span> */}
                    Temperature: {weatherData && weatherData.entries[1].temperature}
                    <div></div>
                    Conditions: {weatherData && weatherData.entries[1].condition}
                </Row>
        </Container>
    )
}

export default Weather;