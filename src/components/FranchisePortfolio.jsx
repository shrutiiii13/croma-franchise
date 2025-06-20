import React from 'react'
import croma from '../assets/images/products/croma-img.png'
import electronics from '../assets/images/products/electronics-img.jpg'
import phone from '../assets/images/products/phone-im.jpg'
import tv from '../assets/images/products/tv.jpg'



const FranchisePortfolio = () => {
  return (
    <div>
        <section className="w-full px-6 py-12 bg-gray-100">
  
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
    Our first proud venture
  </h2>
  <p className='text-center' > Official Franchise Partner of Croma – India’s leading electronics and appliance retailer.</p>
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Franchise Portfolio</h2>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
    
    
    <div className="bg-black relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img 
        src={croma}
        alt="Feature 1" 
        className="w-full h-60 object-cover transition-opacity duration-500 group-hover:opacity-40"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-center text-lg font-semibold">We are proud to be an official franchise partner of Croma, a Tata Enterprise.</p>
      </div>
    </div>

    
    <div className="bg-black relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img 
        src={electronics}
        alt="Feature 2" 
        className="w-full h-60 object-cover transition-opacity duration-500 group-hover:opacity-40"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-center text-lg font-semibold"> Electronics and Kitchen appliances</p>
      </div>
    </div>

    <div className="bg-black relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img 
        src={phone}
        alt="Feature 3" 
        className="w-full h-60 object-cover transition-opacity duration-500 group-hover:opacity-40"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-center text-lg font-semibold">Smartphones and Laptops</p>
      </div>
    </div>

    <div className="bg-black relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img 
        src={tv}
        alt="Feature 4" 
        className="w-full h-60 object-cover transition-opacity duration-500 group-hover:opacity-40"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-center text-lg font-semibold">Home Entertainment Systems</p>
      </div>
    </div>

  </div>
</section>

      
    </div>
  )
}

export default FranchisePortfolio
