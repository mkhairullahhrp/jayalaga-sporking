import React from 'react';
import ButtonGooglePlay from './ButtonGooglePlay';
import MobileDisplay from '../assets/img/promo/MobilePhoneDisplay.svg';
import { Link } from 'react-router-dom';

const FormBanner = () => {
  return (
    <>
      <div className="hidden relative lg:flex w-2/3 h-full items-center justify-center text-primary ">
        <Link to="/HomePage" className="ml-5 w-10 h-10 self-start mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=""
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <div className="w-full self-center px-4 lg:w-1/2 relative">
          <img
            src={MobileDisplay}
            alt="Display Mobile"
            className="h-[432px] mx-auto relative z-10"
          />
          <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FF8400"
                d="M39,-62.1C49.4,-61.5,55.9,-48.8,62.4,-36.4C68.9,-24,75.4,-12,76.2,0.5C77,12.9,72.1,25.8,63.4,34.5C54.7,43.1,42.3,47.5,31.1,56.1C19.9,64.7,10,77.7,-2,81.2C-14.1,84.7,-28.1,78.9,-34.7,67.6C-41.3,56.3,-40.4,39.6,-44.9,27.4C-49.4,15.2,-59.1,7.6,-60.7,-0.9C-62.3,-9.4,-55.6,-18.9,-49.7,-28.6C-43.9,-38.3,-38.8,-48.3,-30.6,-50.1C-22.4,-52,-11.2,-45.7,1.5,-48.4C14.3,-51,28.6,-62.7,39,-62.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </span>
        </div>
        <div className="w-full -mt-32 px-4 lg:w-1/2">
          <p className="font-semibold mb-7">
            Dapatkan pengalaman terbaik dengan mengunduh aplikasi{' '}
            <span className="font-extrabold">Sporking</span>di Playstore ini sekarang juga!
          </p>
          <ButtonGooglePlay />
        </div>
      </div>
    </>
  );
};

export default FormBanner;
