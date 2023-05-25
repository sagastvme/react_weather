import {createBrowserRouter, RouterProvider, useParams} from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import WeatherData from "./pages/WeatherData.jsx";


function App() {


    const options =
        ['bg-gradient-to-r from-black to-gray-600',

            'bg-gradient-to-r from-black to-blue-900',

            'bg-gradient-to-b from-orange-600 to-yellow-600',
            'bg-gradient-to-t from-black to-purple-800',
            'bg-gradient-to-t from-red-600 to-yellow-800',
            'bg-gradient-to-t from-green-600 to-pink-800',
            'bg-gradient-to-l from-yellow-600 to-gray-600',
            'bg-gradient-to-l from-green-800 to-black',
            'bg-gradient-to-l from-orange-800 to-purple-600']
    const randNumber = Math.floor(Math.random() * options.length);
    const background=    (options[randNumber]);



    const router = createBrowserRouter([

        {
            path: '/',
            element: <Welcome/>,
        },
        {path:':city',
            element: <WeatherData/>,
        }
    ])

    return (
        <div className={`${background} text-white w-full h-full`}>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App



