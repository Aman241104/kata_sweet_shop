import React from 'react'
import Hero from '../components/Hero'
import HomeCrads from '../components/HomeCards'
import SweetListings from '../components/SweetListings'
import ViewAllSweeets from '../components/ViewAllSweeets'

const HomePage = () => {
  return (
    <>
        <Hero title="Have A Sweet Day" subtitle="For all Your Sweet cravings"  />
        <HomeCrads />
        <SweetListings isHome={true} />
        <ViewAllSweeets />
    </>
  )
}

export default HomePage