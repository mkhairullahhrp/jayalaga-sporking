import React from 'react';
import Card from './Card';

const BookNow = () => {
  return (
    <>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-semibold text-primary mb-5 text-3xl">Booking Sekarang!</h2>
            <div className="border-b-4 border-primary w-14 mx-auto rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-wrap md:justify-center z-10 mt-14">
          <Card img="https://source.unsplash.com/360x200?futsal" title="Futsal" />
          <Card img="https://source.unsplash.com/360x200?basketball" title="Basket" />
          <Card img="https://source.unsplash.com/360x200?volley" title="Voli" />
          <Card img="https://source.unsplash.com/360x200?Soccer" title="Sepak Bola" />
          <Card img="https://source.unsplash.com/360x200?Badminton" title="Bulutangkis" />
        </div>
        <div className="mt-10 text-center lg:text-center">
          <a
            href="#"
            className="text-primary border-2 border-primary hover:bg-primary hover:text-white py-3 px-8 z-10 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
          >
            Lihat Lainnya
          </a>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260" className="mt-44 absolute">
          <path
            fill="#ff8400"
            fillOpacity="1"
            d="M0,96L34.3,85.3C68.6,75,137,53,206,58.7C274.3,64,343,96,411,106.7C480,117,549,107,617,106.7C685.7,107,754,117,823,106.7C891.4,96,960,64,1029,74.7C1097.1,85,1166,139,1234,138.7C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    </>
  );
};

export default BookNow;
