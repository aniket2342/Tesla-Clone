import React from 'react'
import solarpanel from '../tools/solar_panel.jpg'
import solarroof from '../tools/solar-roof.jpg'
import powerwall from '../tools/powerwall.jpg'
import Accessories from '../tools/Accessories _Tesla (2).jpg'
function Acessories() {
  return (
    <>
    {/* soler panel */}
    <div className="relative w-full h-screen">
      <img
        src={solarpanel}
        alt="Model Y"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white md:p-0">
        <h1 className="text-5xl md:text-5xl sm:text-7xl font-semibold">Solar Panels</h1>
        <p className="text-md md:text-md sm:text-2xl mt-1 cursor-pointer underline">Schedule a Virtual Consultation</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200">
            Order Now
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>
    </div>

    {/* solar roof */}
    <div className="relative w-full h-screen">
      <img
        src={solarroof}
        alt="Model Y"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-black md:p-0">
        <h1 className="text-5xl md:text-5xl sm:text-7xl font-semibold ">Solar Roof</h1>
        <p className="text-xl md:text-xl sm:text-2xl mt-2">Produce Clean Energy From Your Roof</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200">
            Order Now
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
           Learn More
          </button>
        </div>
      </div>
    </div>

    {/* powerwall */}
    <div className="relative w-full h-screen">
      <img
        src={powerwall}
        alt="Model Y"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-black md:p-0">
        <h1 className="text-5xl md:text-5xl sm:text-7xl font-semibold ">Powerwall</h1>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200">
            Order Now
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
    {/* accessories */}
    <div className="relative w-full h-screen">
      <img
        src={Accessories}
        alt="Model Y"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-black md:p-0">
        <h1 className="text-5xl md:text-5xl sm:text-7xl font-semibold ">Accessories</h1>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200">
            Shop Now
          </button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Acessories