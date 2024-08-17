import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-4 lg:grid-cols-12 md:grid-cols-8 gap-10">
        <div className="col-span-4 flex font-bold justify-center ">
          Certification by:

          <div className='ml-5 space-y-5'>
            <img src="/src/assets/img/footer1.png" alt="" />
            <img src="/src/assets/img/footer2.png" alt="" />
          </div>
        </div>
        <ul className="flex justify-evenly items-center text-4xl space-x-5 col-span-4">
          <li><i className="fab fa-facebook-f"></i></li>
          <li><i className="fab fa-instagram"></i></li>
          <li><i className="fab fa-youtube"></i></li>
          <li><i className="fab fa-twitter-square"></i></li>
          <li><i className="fab fa-linkedin"></i></li>
        </ul>
        <div className="lg:col-span-4 md:col-span-8 col-span-4 flex justify-evenly items-center">
          <a href="https://play.google.com/store/apps" ><img src="/src/assets/img/footer5.svg" alt="" /></a>
          <a href="https://apps.apple.com/" className=""><img src="/src/assets/img/footer6.svg" alt="" /></a>
        </div>
      </div>
      <div className="container mx-auto mt-8 col-span-12">
        <p className="text-center text-gray-400">
          Privacy Policy | Terms &amp; Conditions | Terms of Use
        </p>
      </div>
    </footer>

  );
};

export default Footer;
