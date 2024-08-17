import React from 'react';
import ScrollNavigation from '../../layout/ScrollNavigation/ScrollNavigation';
import ListMovie from '../../layout/ListMovie/ListMovie';
import Offer from '../../layout/Offer/Offer';
import Banner from '../../layout/Banner/Banner';
import Trailer from '../../layout/Trailer/Trailer';

const HomePage = () => {
  return (
    <>
      <Banner />
      <ScrollNavigation />
      <ListMovie id="now-showing" label="Now Showing" />
      <ListMovie id="coming-soon" label="Coming Soon" />
      <Trailer />
      <Offer id="offer" />
    </>
  );
};

export default HomePage;
