import React from 'react'
import Logo from'../assets/images/logo/sham-logo.webp'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-600 text-white px-5 py-5">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-5">

    <div className="flex flex-col space-y-3 md:w-1/2">
      
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Logo" class="w-20 h-20" />
        <span className="text-3xl font-semibold">Shyamsunder corporation</span>
      </div>
      
      <p className="text-gray-400">
        Bringing quality services right to your doorstep. We are here to help you 24/7.
      </p>
    </div>

    
    <div className="md:w-1/2">
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-2 text-gray-300">
        <li><span className="font-medium">Phone:</span>+91 9225577999</li>
        <li><span className="font-medium">Email:</span> manish@sagargases.com</li>
        <li><span className="font-medium">Address:</span>SM Group Embassy 3rd Floor,Tata Croma,Old Mondha, Mama Chowk, Jalna-431203</li>
      </ul>
    </div>

  </div>

  
  {/* <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
    © 2025 YourBrand. All rights reserved.
  </div> */}
</footer>

    </div>
  )
}

export default Footer 
