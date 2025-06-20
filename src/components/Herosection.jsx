import React from 'react'
import heroimg from '../assets/images/background/hero-img.jpeg'

const Herosection = () => {
  return (
    // <div className='w-full h-[80vh]' >
    //   <img src={heroimg} className='w-full h-full object-cover' alt="hero-img" />
    // </div>
   // <!-- Hero Section -->
<section className="w-full min-h-[70vh] pt-16 px-6 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
    
    
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Building Brands.Powering Growth</h1>
      <p className="text-gray-600 mb-6">
Shyamsunder Corporation Private Limited is a multi-franchise business group committed to delivering top-tier consumer experiences through strategic brand partnerships starting with our proud association with Croma.Shyamsunder Corporation Private Limited is a dynamic franchise management company with a vision to become a leading multi-brand partner across India. Founded on values of trust, innovation, and service excellence, we bring nationally trusted brands closer to customers through strategic franchise development.</p>
      <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">visit our croma store</button>
    </div>

   
    <div className="w-full md:w-1/2">
      <img src={heroimg} alt="Hero" class="w-full h-auto object-cover rounded-lg shadow-lg" />
    </div>
  </div>
    </section>
    

  )
}

export default Herosection
