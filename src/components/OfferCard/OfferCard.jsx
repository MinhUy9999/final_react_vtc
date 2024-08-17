import React from 'react';

const OfferCard = ({src, toggle}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div>
        <img src={src} alt="" />
        </div>
      <div className="px-6 pt-4 pb-2">
        <h3 className='font-semibold'>UNLIMITED REFILL OFFER</h3>
        
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
      <small className="block">Valid till: Mon, Sep 30, 2024</small>
        <button 
        onClick={toggle}
        className="bg-primary text-black font-semibold py-1 px-3 rounded">
          View
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
