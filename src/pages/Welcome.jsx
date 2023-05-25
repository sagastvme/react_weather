
import {useRef, useState} from "react";

import {useNavigate} from "react-router-dom";

const Welcome = () => {


  const pushToRoute= useNavigate();

  const takeToAnotherRoute=()=>{
    pushToRoute(':city')
  }

  let city=useRef('')
  const [isEmpty, setIsEmpty]=useState(false)
  const [result, setResult]=useState(true)
  const [message, setMessage]=useState('The city input cannot be empty')

  const test=async (event) => {
    setResult(true)
    setIsEmpty(false)
    setMessage('The city input cannot be empty')
    event.preventDefault();
    const cityDesired = city.current.value.trim()
    if (cityDesired === '') {
      setIsEmpty(true)
    }else{
  pushToRoute(`/${cityDesired}`)
    }

    city.current.value = ''
  }
  return (
      <div className="pt-32 h-screen mt-1/2 text-lg min-h-full px-6 lg:px-8 ">
        {/* Content */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <svg
          className=" mx-auto "
          width="100px"
          height="100px"
          viewBox="0 0 32 32"
          enableBackground="new 0 0 32 32"
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"

          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Layer_2"></g> <g id="Layer_3"></g> <g id="Layer_4"></g>{" "}
            <g id="Layer_5"></g> <g id="Layer_6"></g> <g id="Layer_7"></g>{" "}
            <g id="Layer_8"></g> <g id="Layer_9"></g> <g id="Layer_10"></g>{" "}
            <g id="Layer_11"></g> <g id="Layer_12"></g> <g id="Layer_13"></g>{" "}
            <g id="Layer_14"></g> <g id="Layer_15"></g> <g id="Layer_16"></g>{" "}
            <g id="Layer_17"></g> <g id="Layer_18"></g> <g id="Layer_19"></g>{" "}
            <g id="Layer_20"></g> <g id="Layer_21"></g> <g id="Layer_22"></g>{" "}
            <g id="Layer_23"></g>{" "}
            <g id="Layer_24">
              {" "}
              <g>
                {" "}
                <path
                  d="M16.1,9.5c-1.4,0.9-2.4,2.2-2.8,3.7c-0.1,0.3-0.4,0.6-0.7,0.7c-0.1,0-0.2,0-0.2,0c-0.3,0-0.5-0.1-0.7-0.3 C10.7,12.5,9.4,12,8,12c-1.2,0-2.3,0.4-3.2,1.1c-0.3,0.2-0.6,0.3-1,0.2c-0.3-0.1-0.6-0.4-0.7-0.7C3.1,12.1,3,11.5,3,11 c0-3.9,3.1-7,7-7c2.8,0,5.3,1.7,6.5,4.3C16.6,8.7,16.5,9.2,16.1,9.5z"
                  fill="#FFC10A"
                ></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path
                  d="M31,15c0,5-4.5,9-10,9H8c-3.9,0-7-3.1-7-7c0-2.1,0.9-4,2.5-5.4C4.8,10.6,6.4,10,8,10 c1.4,0,2.8,0.4,3.9,1.2c0.7-1.3,1.7-2.5,3-3.4C16.7,6.6,18.8,6,21,6C26.5,6,31,10,31,15z"
                  fill="#607C8B"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
            <g id="Layer_25"></g> <g id="Wearher"></g>{" "}
          </g>
        </svg>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Check the Weather
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={test} className="space-y-6" >
          <div>
            <label
              htmlFor="city"
              className="text-center text-lg block  font-medium leading-6 text-white"
            >
              Enter your desired city
            </label>
            <div className="mt-2">
              <input
                id="city"
                name="city"
                type="city"
                autoComplete="city"
                required
                ref={city}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0.5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-600
              px-3 py-1.5  font-semibold leading-6 text-white shadow-sm hover:bg-gray-500
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-gray-600"
            >
              Give me my info!
            </button>

          </div>
          { (isEmpty|| !result) && <div role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Warning
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{message}</p>
            </div>
          </div> }
        </form>
      </div>
    </div>
  );
};

export default Welcome;
