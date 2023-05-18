
import './App.css';
import AskForWeather from "./AskForWeather";
import React, {useEffect} from "react";

function App() {
useEffect( ()=>{
    test()
} )
    const test = () => {
        console.log('hello');
    };

    return (
        <React.Fragment>
            <h1>Weather app</h1>
            <AskForWeather />
        </React.Fragment>
    );
}

export default App;
