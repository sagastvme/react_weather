import {useState} from "react";
import './AskForWeather.css'; // Import the CSS file for styling
import React from 'react';
import axios from "axios";

const AskForWeather = () => {
    let errorMessage='Please make sure the City input is not empty'
    const [openDialog, setDialog] = useState(false);
    const [openMessage, setMessage]=useState(errorMessage)

    const fetchWeather = async (event) => {
        event.preventDefault();
     if( event.target[0].value.trim().length===0){
         setDialog(true);
     }else {

         const api_key = 'cb3f848e6f004acf8ff131821232604';
         const city = event.target[0].value
         console.log(city)
         try {
             const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`)
             setMessage('Feels like '+ response.data.current.feelslike_c +'\n Clouds '+response.data.current.cloud)
             setDialog(true)
             console.log(response)
             event.target[0].value=''
         } catch {
             event.target[0].value=''
             setMessage('La ciudad que ha introducido no existe')
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
                <input type="text" required id="title" />
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





