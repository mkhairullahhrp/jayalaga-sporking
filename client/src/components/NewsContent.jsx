import React from 'react';
import NewsCard from './NewsCard';
// import { Link } from 'react-router-dom';

const NewsContent = () => {
  return (
    <>
      {/* <div className=" px-4 mb-10 lg:w-1/3">
              <img src="https://source.unsplash.com/360x200?fields" alt="" />
              <h3 className="py-3">
                <a
                  href="#"
                  className="block font-extrabold text-xl text-dark hover:text-primary truncate"
                >
                  Mbappe Pindah MU
                </a>
              </h3>
              <p className="font-medium text-base text-dark max-w-xl lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit quis natus ut
                sequi quo debitis.
              </p>
            </div> */}
      <section id="news" className="pt-32 pb-28">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-5xl mb-8">
              <h1 className="font-semibold text-dark text-2xl sm:text-4xl lg:text-3xl">
                Berita terbaru!
              </h1>
              <div className="border-b-4 border-dark w-3/12 rounded-md"></div>
            </div>
          </div>
          {/* <!-- boleh tidak dipakai md:justify center --> */}
          <div className="flex flex-wrap md:justify-center">
            <NewsCard img="sports" title="Mbappe pindah ke MU" />
            <NewsCard img="football" title="Ronaldo lebih dari Messi" />
            <NewsCard img="hockey" title="Thiago Silva Pindah" />
            <NewsCard img="rugby" title="Arsenal juara premier league" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsContent;
