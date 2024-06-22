import React from 'react';
import ButtonGooglePlay from './ButtonGooglePlay';
import MobileDisplayApp from '../assets/img/promo/MobilePhoneDisplay.svg';

const MobileDisplay = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-10 lg:w-1/2 flex self-center">
          <div className="ml-28">
            <h2 className="font-semibold w-10/12 text-primary mb-2 text-4xl">
              Unduh Aplikasi Mobile Kami!
            </h2>
            <p className="font-medium text-dark w-10/12 mb-5 leading-relaxed">
              Aplikasi kami adalah aplikasi multiplatform yang dapat membantu anda dalam menyewa
              lapangan olahraga secara lebih efektif dan efisien.
            </p>
            <ButtonGooglePlay />
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 flex justify-center items-center">
          <img src={MobileDisplayApp} alt="Mobile Devices" className="h-[532px]" />
        </div>
      </div>
    </>
  );
};

export default MobileDisplay;
