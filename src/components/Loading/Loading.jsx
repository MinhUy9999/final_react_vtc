import React from 'react';
import Lottie from 'lottie-react';
import LoadingCinema from './../../assets/animation/Animation.json';

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center fixed top-0 left-0 z-50 bg-gray-200 bg-opacity-30">
      <Lottie animationData={LoadingCinema} loop={true} />
    </div>
  );
};

export default Loading;
