import React from 'react';

const Result = ({ dataReceived, city }) => {

        return (
            <div className="rounded-xl flex-col pt-32  w-full flex items-center justify-center  text-center text-white">
                <div className='p-5 flex items-center rounded-xl flex-col  bg-red-300 bg-opacity-10'>
                <div className="flex flex-row  w-full  justify-center pr-5">
                    <img src={dataReceived.current.condition.icon} className="select-none" />
                    <div className="text-lg text-gray-300 font-medium my-auto">
                        Right now is
                        <span className="text-white text-xl font-bold"> {dataReceived.current.condition.text}</span> in
                        <span className=" text-white text-xl font-bold"> {city[0].toUpperCase() + city.substring(1)}</span>
                    </div>
                </div>

                <div className="h-full text-lg text-justify w-full">
                    <div className="mt-8 w-full">
                        <ul className="w-full text-center ">
                            <li>
                                <span className="mr-2">Local time and date:</span> <span className="font-medium">{dataReceived.location.localtime}</span>
                            </li>



                            <li>
                                <span className="mr-2">Region:</span> <span className="font-medium">{dataReceived.location.region}</span>
                            </li>

                            <li>
                                <span className="mr-2">Clouds:</span> <span className="font-medium">{dataReceived.current.cloud}%</span>
                            </li>

                            <li>
                                <span>Feels like:</span> <span className="font-medium">{dataReceived.current.feelslike_c} °C</span>
                            </li>

                            <li>
                                <span>Humidity:</span> <span className="font-medium">{dataReceived.current.humidity}%</span>
                            </li>

                            <li>
                                <span>Temperature:</span> <span className="font-medium">{dataReceived.current.temp_c} °C</span>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        );


// Render nothing if dataReceived is false or error is true
};

export default Result;
