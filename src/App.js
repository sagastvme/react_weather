
import './App.css';
import AskForWeather from "./AskForWeather";
import {useEffect} from "react";

function App() {
useEffect( ()=>{
    test()
} )
    const test = () => {
        console.log('hello');
    };

    return (
        <div>
            <h1>Weather app</h1>
            <AskForWeather />
        </div>
    );
}

export default App;
