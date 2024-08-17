import React from 'react';

const ImageOverlay = ({ imageUrl }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-90" style={{zIndex: "-2"}}>
          <img src={imageUrl} alt="Overlay Image" className="w-screen object-fit-containπø opacity-25"/>
        </div>
      );
};

export default ImageOverlay;
