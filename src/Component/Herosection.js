import React from 'react'
import vid from '../tools/Introducing Model Y.mp4'

function Herosection() {
  return (
    <div className="relative  inset-0  ">
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white p-4 md:p-0">
        <h1 className="text-3xl md:text-5xl sm:text-7xl font-semibold">Model Y</h1>
        <p className="text-lg md:text-xl sm:text-2xl mt-2">0.99% APR Financing</p>
        <p className="text-sm md:text-md sm:text-2xl mt-1">From $299/mo* Lease After Est. Gas Savings</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200">
            Order Now
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Demo Drive
          </button>
        </div>
      </div>
    <video
      className="object-cover object-center w-full md:h-screen sm:"
      autoPlay
      loop
      muted
    >
      <source src={vid} type="video/mp4" />
    </video>
  </div>

  )
}

export default Herosection