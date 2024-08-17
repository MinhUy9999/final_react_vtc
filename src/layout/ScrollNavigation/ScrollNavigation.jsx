import { useState } from 'react';
import Block from '../../components/Block/Block';
import ListMovie from '../ListMovie/ListMovie';

const ScrollNavigation = () => {
  const [activeButton, setActiveButton] = useState('nowShowing');

  const handleClickScroll = (buttonName, id) => {
    setActiveButton(buttonName);
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="p-4 container" id="sroll-navigation">
      <nav className="rounded border-2  border-primary border-x-0 border-t-0 border-opacity-30 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div
            className="hidden justify-between items-center w-full sm:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex md:flex-row md:mt-0 md:text-sm md:font-medium ">
              {[
                { label: 'nowShowing', id: 'now-showing' },
                { label: 'comingSoon', id: 'coming-soon' },
                { label: 'experiences', id: 'c' },
                { label: 'trailers', id: 'trailer' },
                { label: 'offers', id: 'offer' },
              ].map((button, index) => (
                <li key={button.label} className=" m-0">
                  <button
                    onClick={() => handleClickScroll(button.label, button.id)}
                    className={`block md:bg-transparent border-0 relative text-nowrap px-3 py-3
                                            ${
                                              activeButton === button.label
                                                ? 'text-blue-400 hover:text-blue-500 font-semibold'
                                                : 'text-black'
                                            }`}
                    aria-current={
                      activeButton === button.label ? 'page' : undefined
                    }
                  >
                    {button.label.charAt(0).toUpperCase() +
                      button.label
                        .slice(1)
                        .replace(/([A-Z])/g, ' $1')
                        .trim()}
                    {activeButton === button.label && (
                      <span
                        className="absolute h-1 bg-primary bottom-0 translate-y-1/2 left-0 w-0 transition-all duration-300 ease-out"
                        style={{
                          width: activeButton === button.label ? '100%' : '0%',
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ScrollNavigation;
