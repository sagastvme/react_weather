import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NoResults from "./NoResults.jsx";
import Result from "./Result.jsx";

const WeatherData = () => {
    const params = useParams();
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const getWeather = async (cityDesired) => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=cb3f848e6f004acf8ff131821232604&q=${cityDesired}&aqi=no`);
                console.log(response)
                setResponse(

                    <Result dataReceived={response.data} city={params.city}></Result>);
            } catch (error) {
                setResponse(

                    <NoResults/>);
            }
        };

        getWeather(params.city);
    }, []);

    return (
        <>
            {response}
        </>
            );
};

export default WeatherData;
