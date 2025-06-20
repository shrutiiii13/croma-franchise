import React from 'react'
import Herosection from '../components/Herosection'
import FranchisePortfolio from '../components/FranchisePortfolio'
import Qualities from '../components/Qualities'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Herosection />
      <FranchisePortfolio/>
      <Qualities/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
