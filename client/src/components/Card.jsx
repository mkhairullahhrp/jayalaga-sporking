import React from 'react';

const Card = ({ img, title }) => {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2 xl:w-1/5">
        <div className="rounded-xl shadow-md hover:shadow-xl overflow-hidden mb-10 ">
          <img src={img} alt="Sports Field" className="w-full" />
          <div className="py-4 px-3">
            <h3>
              <a href="#" className="block font-semibold text-xl text-primary truncate">
                {title}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
