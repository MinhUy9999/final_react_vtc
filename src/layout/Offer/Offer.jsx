import React, { useEffect, useRef, useState } from 'react';
import OfferCard from '../../components/OfferCard/OfferCard';
import SlideUpModal from '../../components/SlideUpModal/SlideUpModal';

const Offer = () => {
  const offerCardList = new Array(4).fill(true);
  const [isToggled, setIsToggled] = useState(false);
  const [animation, setAnimation] = useState('');
  const modalRef = useRef(null); // Tạo một ref để tham chiếu tới phần tử modal
  const toggle = (data) => {
    if (!isToggled) {
      setIsToggled(true);
      setAnimation('animate-slide-up');
    } else {
      setAnimation('animate-slide-down');
      setTimeout(() => {
        setIsToggled(false);
      }, 500); // Thời gian đợi tương ứng với duration của animation
    }
  };
  // Thêm sự kiện nghe click vào document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setAnimation('animate-slide-down');
        setTimeout(() => {
          setIsToggled(false);
        }, 500); // Thời gian đợi tương ứng với duration của animation
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div
      className="containerss mx-auto px-4 py-8"
      id="offer"
      style={{ scrollMarginTop: '30vh' }}
    >
      <h2 className="text-2xl font-bold text-center mb-8">Offers For You</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {offerCardList.map((card, index) => {
          return <OfferCard src={`./offer${index}.jpg`} toggle={toggle} />;
        })}
      </div>
      <SlideUpModal
        modalRef={modalRef}
        isToggled={isToggled}
        animation={animation}
        toggle={toggle}
      >
        <div className="bg-white rounded-lg w-full space-y-10 lg:px-16 ">
          <h2 className="text-3xl font-bold">UNLIMITED REFILL OFFER</h2>

          <div className="">
            <div className="flex justify-between items-center w-full h-100 overflow-hidden">
              <img
                src="./offer0.jpg"
                className="w-full max-h-64 object-cover rounded-t-3xl"
                alt=""
              />
            </div>

            <div className="p-4 text-sm ">
              <h3 className="font-bold my-2">Terms and Conditions</h3>
              <ul className="list-decimal space-y-2">
                <li>
                  The offer is available at the cinema near you. Applicable at
                  offline only.
                </li>
                <li>
                  Please check with the cinema team for the availability of the
                  offers before buying.
                </li>
                <li>
                  Not applicable for group booking / special shows of Food and
                  beverage.
                </li>
                <li>
                  Offer valid only for f&b purchase in cinema, not applicable in
                  delivery/Takeaway.
                </li>
                <li>
                  PVR has the right to withdraw/change the offer without any
                  prior notice.
                </li>
                <li>
                  Unlimited refill offer valid only from Friday to Sunday all
                  day, on selected size and flavor only.
                </li>
                <li>
                  Unlimited refills are valid till four hours from the time of
                  billing/redemption.
                </li>
                <li>Valid only on Popcorn Salted 240 gm, Pepsi/Coke 810 ml.</li>
                <li>
                  Offer valid till stock lasts or subject to availability.
                </li>
                <li>
                  Offer is available Pan India except for luxury cinema formats
                  like LUXE/Gold and TLC cinemas. (Directors Cut, Ambience
                  Gurgaon | Directors Cut, Ambience Delhi | ICON Infinity Mumbai
                  | Jio World, Makers Mumbai | Director Cut, Rex Bangalore | PVR
                  Select City Walk | PVR, Mall of India, Noida | PVR, Nitest Hub
                  Pune)
                </li>
                <li>Offer not valid on Public Holidays.</li>
              </ul>
            </div>
          </div>
        </div>
      </SlideUpModal>
    </div>
  );
};

export default Offer;
