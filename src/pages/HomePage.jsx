import React from 'react';
import Hero from '../components/Hero';
import HomeCrads from '../components/HomeCards';
import SweetListings from '../components/SweetListings';
import ViewAllSweeets from '../components/ViewAllSweeets';

const HomePage = ({ searchQuery }) => {
  return (
    <>
      <Hero title="Have A Sweet Day" subtitle="For all Your Sweet cravings" />
      <HomeCrads />
      <SweetListings isHome={true} searchQuery={searchQuery} />
      <ViewAllSweeets />
    </>
  );
};

export default HomePage;