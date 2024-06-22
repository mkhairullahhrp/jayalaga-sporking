import React from 'react';

const NewsCard = ({ img, title }) => {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2 xl:w-1/4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <img
            src={`https://source.unsplash.com/360x200?${img}`}
            alt="Sports News"
            className="w-full"
          />
          <div className="py-8 px-6">
            <h3>
              <a
                href="#"
                className="block mb-3 font-extrabold text-xl text-dark hover:text-primary truncate"
              >
                {title}
              </a>
            </h3>
            <p className="font-medium text-base text-dark mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus incidunt nulla
              nisi.
            </p>
            <a
              href="/PageNews"
              className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
            >
              Baca Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
