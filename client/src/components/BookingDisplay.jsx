import React from 'react';

const BookingDisplay = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-1/2 flex justify-center items-center">
          <div className="m-2">
            <img
              className="rounded-lg"
              src="https://source.unsplash.com/300x200?futsal"
              alt="Field Display"
            />
            <img
              className="mt-2 lg:ml-12 rounded-lg"
              src="https://source.unsplash.com/200x140?football"
              alt="Field Display"
            />
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://source.unsplash.com/380x280?gym"
              alt="Field Display"
            />
          </div>
        </div>
        <div className="w-full px-4 mb-10 lg:w-1/2 flex flex-wrap self-center">
          <div className="ml-28">
            <h2 className="font-semibold w-5/12 text-secondary mb-2 text-4xl sm:w-full">
              Aplikasi Booking Sporking
            </h2>
            <p className="font-medium text-secondary w-10/12 mb-10 leading-relaxed">
              Ada beberapa layanan olahraga yang kami sediakan seperti futsal, basket, voli, sepak
              bola, bulutangkis dan sebagainya.
            </p>
            <a
              href="#"
              className="text-secondary border-2 hover:text-white border-secondary py-3 px-8 z-10 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
            >
              Booking Sekarang!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDisplay;
