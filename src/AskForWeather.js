import {useRef, useState} from "react";
import './AskForWeather.css'; // Import the CSS file for styling
import React from 'react';
import axios from "axios";

const AskForWeather = () => {
    let errorMessage='Please make sure the City input is not empty'
    const [openDialog, setDialog] = useState(false);
    const [openMessage, setMessage]=useState(errorMessage)
    const cityInput= useRef();

    const fetchWeather = async (event) => {
        event.preventDefault();
     
     if( cityInput.current.value.trim().length===0){
         setDialog(true);
     }else {

         const api_key = 'cb3f848e6f004acf8ff131821232604';


         try {
             const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${cityInput.current.value}&aqi=no`)
             setMessage('Feels like '+ response.data.current.feelslike_c +'\n Clouds '+response.data.current.cloud)
             setDialog(true)

             cityInput.current.value=''
         } catch {
             cityInput.current.value=''
             setMessage('The city you entered does not exist')
             setDialog(true);
         }
     }
    };

    const closeDialog = () => {
        setDialog(false);
         setMessage('Please make sure the City input is not empty')
    };

    return (
        <div>
            <form action="" noValidate onSubmit={fetchWeather}>
                <label htmlFor="title">City</label>
                <input type="text" ref={cityInput} required id="title" />
                <input type="submit" value="Get weather" />
            </form>


                <dialog open={openDialog} >
                    <p>{openMessage}</p>
                    <button onClick={closeDialog}>Close</button>
                </dialog>
        </div>
    );
};

export default AskForWeather;





