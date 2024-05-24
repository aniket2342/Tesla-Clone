import React from 'react'
import model3 from '../tools/model3.jpg'
import modelx from '../tools/modelx.jpg'
import models from '../tools/models.jpg'
import cybertruck from '../tools/cyberTruck_tesla.png'

function Model1() {
    
  return (
  <>
  {/* car model 1 */}
    <div className="relative w-full h-screen">
      <img
        src={model3}
        alt="Model Y"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-black md:p-0">
        <h1 className="text-5xl md:text-5xl sm:text-7xl font-semibold">Model 3</h1>
        <p className="text-xl md:text-xl sm:text-2xl mt-2">From $33,990²</p>
        <p className="text-md md:text-md sm:text-2xl mt-1">After Est. Savings</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200">
            Order Now
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Demo Drive
          </button>
        </div>
      </div>
    </div>

    {/* car model 2 */}
    <div className="relative w-full h-screen">
      <img
        src={modelx}
        alt="Model Y"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-black md:p-0">
        <h1 className="text-5xl md:text-5xl sm:text-7xl font-semibold">Model X</h1>
        <p className="text-xl md:text-xl sm:text-2xl mt-2">From $63,990³</p>
        <p className="text-md md:text-md sm:text-2xl mt-1">After Est. Savings</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200">
            Order Now
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Demo Drive
          </button>
        </div>
      </div>
    </div>

    {/* model 3 */}
    <div className="relative w-full h-screen">
      <img
        src={models}
        alt="Model Y"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-black md:p-0">
        <h1 className="text-5xl md:text-5xl sm:text-7xl font-semibold">Model S</h1>
        <p className="text-xl md:text-xl sm:text-2xl mt-2">From $66,490⁴</p>
        <p className="text-md md:text-md sm:text-2xl mt-1">After Est. Savings</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200">
            Order Now
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Demo Drive
          </button>
        </div>
      </div>
    </div>

    {/* car model 4 */}
    <div className="relative w-full h-screen">
      <img
        src={cybertruck}
        alt="Model Y"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-black md:p-0">
        {/* <h1 className="text-5xl md:text-5xl sm:text-7xl font-semibold">Model S</h1>
        <p className="text-xl md:text-xl sm:text-2xl mt-2">From $66,490⁴</p>
        <p className="text-md md:text-md sm:text-2xl mt-1">After Est. Savings</p> */}
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200">
            Order Now
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Demo Drive
          </button>
        </div>
      </div>
    </div>

  </>
  )
}

export default Model1